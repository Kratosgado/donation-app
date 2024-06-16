import { Donation, DonationStatus } from "../utils/donation";
import { auth } from "./firebase";
import { addDataToFirestore } from "./auth";


export const offerDonation = async (data: Donation) => {
    // save donation to Database
    await addDataToFirestore("donations", data).then(() => {
        console.info("data added: ");
    }).catch((err) => {
        console.error("Error saving donation: ", err);
     });
}