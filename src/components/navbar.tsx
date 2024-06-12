"use client";
import React, { useEffect, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils/cn";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { onAuthStateChanged } from "@/lib/firebase/auth";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const user = useUserSession(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border border-transparent dark:border-white/[0.2] rounded-full ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About Us</HoveredLink>
            <HoveredLink href="/#inspirations">Inspirations</HoveredLink>
            <HoveredLink href="#how-it-works">How it works?</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Donate">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Have Food for spare?"
              href="#donations"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Have clothes for the needy?"
              href="#donations"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        {user !== null ? (
          <MenuItem
            setActive={setActive}
            active={active}
            item={user.displayName!}
          ></MenuItem>
        ) : (
          <MenuItem
            setActive={setActive}
            active={active}
            item="Have an account?"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/signup">Sign Up</HoveredLink>
              <HoveredLink href="/login">Log In</HoveredLink>
            </div>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

function useUserSession(initialUser: User | null) {
  // the initialUser comes from the server via a server component
  const [user, setUser] = useState<User | null>(initialUser);
  // const router = useRouter();

  // Register the service worker that sends auth state back to server
  // The service worker is built with npm run build-service-worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const serializedFirebaseConfig = encodeURIComponent(
        JSON.stringify(firebaseConfig)
      );
      const serviceWorkerUrl = `/auth-service-worker.js?firebaseConfig=${serializedFirebaseConfig}`;

      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then((registration) => console.log("Scope is: ", registration));
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    onAuthStateChanged((authUser) => {
      if (user === undefined) return;
      // refresh when user changed to ease testing
      if (user?.email !== authUser?.email) {
        // router.reload();
      }
    });
  }, [user]);
  return user;
}
