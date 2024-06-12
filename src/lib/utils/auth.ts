import { User, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


export function onAuthStateChanged(callback: (user: User | null) => void){
  return auth.onAuthStateChanged(callback);
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error signing in with Google: ", error);
    }
}

export const signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.error("Error signing in with email and password: ", error);
    }
}

export const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Error signing out: ", error);
    }
}