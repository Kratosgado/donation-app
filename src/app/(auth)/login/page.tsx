"use client";
import React from "react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { WavyBackground } from "@/components/ui/wavy-background";
import { signIn, signInWithGoogle } from "@/lib/firebase/auth";
import {
  LabelInputContainer,
  BottomGradient,
  CustomButton,
} from "@/components/label.containter";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn({ email: email, password });
    toast({
      title: "Authentication service",
      description: "Login successful",
    });
    router.replace("/");
  };

  return (
    <WavyBackground className="max-w-4xl mx-auto pt-20">
      <div className="max-w-md w-full mx-auto dark:border-white/[0.2] rounded-md md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to KNUST Donation Platform
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to Platform to reload and record your donations in out database
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="kratosgado@gmail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelInputContainer>

          <CustomButton type="submit"> Log In &rarr;</CustomButton>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              onClick={signInWithGoogle}
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </WavyBackground>
  );
}
