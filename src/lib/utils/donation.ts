import { z } from "zod";

export enum DonationStatus {
  Offered,
  Due,
  Completed,
}

export type Donation = {
    id: string,
    userId?: string;
    type: string;
    description: string;
    quantity: number;
    location: string;
    date: Date;
  images: string[];
    status: DonationStatus
}
 
// form schema for donation form
export const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be greater than 2 letters" })
    .max(25),
  lastName: z
    .string()
    .min(3, { message: "Last name must be greater than 2 letters" })
    .max(25),
  email: z.string().email({ message: "Invalid email address" }),
  type: z.string(),
  description: z
    .string()
    .min(10, { message: "Description must be greater than 10 letters" })
    .max(100),
  quantity: z.number().int().positive(),
  location: z
    .string()
    .min(3, { message: "Location must be greater than 2 letters" })
    .max(25),
  date: z.date(),
  images: z.array(z.string()),
});
