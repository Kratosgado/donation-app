import { User } from "./user"

export enum DonationType {
    CLOTHES,
    FOOD,
    MONEY,
    OTHER 
};

export type Donation = {
    user?: User;
    type: DonationType;
    description: string;
    quantity: number;
    location: string;
    date: Date;
    images: string[];
}