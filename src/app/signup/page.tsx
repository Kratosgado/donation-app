import { SignupForm } from "@/components/signup.form";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

export default function SignUp() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <SignupForm />
    </WavyBackground>
  );
}
