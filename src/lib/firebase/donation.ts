import { Donation, DonationStatus } from "../utils/donation";
import { auth, db } from "./firebase";
import { addDataToFirestore } from "./auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


export const offerDonation = async (data: Donation) => {
    // save donation to Database
    await addDataToFirestore("donations", data).then(() => {
        console.info("data added: ");
    }).catch((err) => {
        console.error("Error saving donation: ", err);
    });
}

export const fetchDonations = async (userId: string): Promise<Donation[]> => {
    const q = query(collection(db, "donation"), where("userId", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as Donation);
}