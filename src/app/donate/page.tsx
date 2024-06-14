"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CustomButton,
  LabelInputContainer,
} from "@/components/label.containter";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Donation, DonationType, formSchema } from "@/lib/utils/donation";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      type: DonationType.CLOTHES,
      description: "",
      quantity: 0,
      location: "",
      images: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md w-full mx-auto dark:border-white/[0.2] rounded-md md:rounded-2xl p-4 md:p-8 shadow-input py-40"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Kratos" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display first name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Gado" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="kratosgado@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  Your email address will not be shared with anyone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Information on Donation */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Donation Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={DonationType.CLOTHES}>
                      Clothes
                    </SelectItem>
                    <SelectItem value={DonationType.FOOD}>Food</SelectItem>
                    <SelectItem value={DonationType.MONEY}>Money</SelectItem>
                    <SelectItem value={DonationType.OTHER}>Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the type of donation you want to make.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormDescription>
                  Describe the donation you want to make.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="Quantity" type="number" {...field} />
                </FormControl>
                <FormDescription>
                  How many items are you donating?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormDescription>
                  Where do you want to donate the items?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date: </FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? format(field.value, "PPP")
                            : "Pick a date"}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormDescription>
                  When do you want to donate the items?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <Input type="file" {...field} multiple />
                </FormControl>
                <FormDescription>
                  Upload images of the items you want to donate.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </Form>
    </WavyBackground>
  );
}

// const DonateForm: React.FC = () => {
//   const [donation, setDonation] = useState<Donation>({
//     type: DonationType.CLOTHES,
//     description: "",
//     quantity: 0,
//     location: "",
//     date: new Date(),
//     images: [],
//   });

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = event.target;
//     setDonation((prevDonation: any) => ({
//       ...prevDonation,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files) {
//       const uploadedImages = Array.from(files).map((file) =>
//         URL.createObjectURL(file)
//       );
//       setDonation((prevDonation: Donation) => ({
//         ...prevDonation,
//         images: [...prevDonation.images, ...uploadedImages],
//       }));
//     }
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log(donation);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Donation Type:
//         <select name="type" value={donation.type} onChange={handleInputChange}>
//           <option value={DonationType.CLOTHES}>Clothes</option>
//           <option value={DonationType.FOOD}>Food</option>
//           <option value={DonationType.MONEY}>Money</option>
//           <option value={DonationType.OTHER}>Other</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Description:
//         <input
//           type="text"
//           name="description"
//           value={donation.description}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Quantity:
//         <input
//           type="number"
//           name="quantity"
//           value={donation.quantity}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Location:
//         <input
//           type="text"
//           name="location"
//           value={donation.location}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Date:
//         <input
//           type="date"
//           name="date"
//           value={donation.date.toISOString().split("T")[0]}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Images:
//         <input
//           type="file"
//           name="images"
//           accept="image/*"
//           multiple
//           onChange={handleImageUpload}
//         />
//       </label>
//       <br />
//       <button type="submit">Donate</button>
//     </form>
//   );
// };

// export default DonateForm;
