"use client"

import { getUserData } from "@/lib/firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { User } from "@/lib/utils/user";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext<User | null>(null);

export const useAuthContext = () => React.useContext<User | null>(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // the initialUser comes from the server via a server component
  const [user, setUser] = useState<User | null>(null);
  // const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser !== null) {
        const user = await getUserData(authUser.uid);
        console.info("currentUser", user);
        setUser(user);
        return;
      }
      setUser(null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};
