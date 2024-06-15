import { Donation } from "./donation";


export type User = Pick<SignUpData, "email" | "firstname" | "lastname"> & {
    id: string,
    donationIds: string[],
};

export type SignUpData = {
    firstname: string,
    lastname: string,
    email: string,
    password?: string,
}

// use optional chaining to avoid errors
export type SignInData = Pick<SignUpData, "email" | "password">;

