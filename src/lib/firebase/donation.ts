import { Donation, DonationStatus } from "../utils/donation";
import { auth } from "./firebase";
import { addDataToFirestore } from "./auth";


export const offerDonation = async (data: Donation) => {
    data.id = data.date.toISOString();
    data.status = DonationStatus.Offered;
    // save donation to Database
    await addDataToFirestore("donations", data).then((res) => {
        console.info("data added: ", res);
    }).catch((err) => {
        console.error("Error saving donation: ", err);
     });
}