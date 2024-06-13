import { User as FirebaseUser, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { SignInData, SignUpData, User } from "../utils/user";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";



export function onAuthStateChanged(callback: (user: FirebaseUser | null) => void) {
    return auth.onAuthStateChanged(callback);
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
        console.info("signin successful", result);
    }).catch((err) => {
        console.error("signin failed", err);
    })
}

export const signUp = async (data: SignUpData) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, data.email, data.password!);
        delete data.password;
        const user: User = {
            id: result.user.uid,
            ...data
        }
        await addDataToFirestore("users", user.id, user);
        console.info("Sign up successful", result);

    } catch (error) {
        console.error("Error signing in with email and password: ", error);
    }
}

export const signIn = async (data: SignInData) => {
    try {
        const result = await signInWithEmailAndPassword(auth, data.email, data.password!);
        console.info("Sign in successful", result);
    } catch (error) {
        console.error("Error signing in with email and password: ", error);
    }
}

const addDataToFirestore = async (collection: string, id: string, data: User) => {
    await setDoc(doc(db, collection, id), data, { merge: true }).then(() => {
        console.info("Document successfully written!");
    }).catch((err) => {
        console.error("Error saving data", err);
    });
}

export const getUserData = async (id: string): Promise<User | null> => {
    const res = await getDoc(doc(db, "users", id));
    if (res.exists()) {
        return res.data() as User;
    }
    return null;

}

export const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Error signing out: ", error);
    }
}