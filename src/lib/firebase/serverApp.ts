import { headers } from "next/headers"
import { app, auth, firebaseConfig } from "./firebase";
import { initializeApp, initializeServerApp } from "firebase/app";
import { Auth, getAuth, getIdToken } from "firebase/auth";
import { NextRequest } from "next/server";
import { getInstallations, getToken } from "firebase/installations";
import { getFirestore } from "firebase/firestore";

export const getAuthenticatedAppForUser = async () => {
    const idToken = headers().get("Authorization")?.split("Bearer ")[1];
    console.log("firebaseConfig", JSON.stringify(firebaseConfig));
    const firebaseServerApp = initializeServerApp(firebaseConfig, idToken ? {
        authIdToken: idToken,
    } : {});

    const auth = getAuth(firebaseServerApp);
    await auth.authStateReady();
    // const db = getFirestore(firebaseServerApp);

    return { firebaseServerApp, currentUser: auth.currentUser };
}


async function fetchWithFirebaseHeaders(request: NextRequest) {
    const installations = getInstallations(app);
    const headers = new Headers(request.headers);
    const [authIdToken, installationToken] = await Promise.all([
        getAuthIdToken(auth),
        getToken(installations)
    ])
}

async function getAuthIdToken(auth: Auth) {
    await auth.authStateReady();
    if (!auth.currentUser) return;
    return await getIdToken(auth.currentUser);
}