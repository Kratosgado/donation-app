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
import { CustomButton } from "@/components/label.containter";
import { Input } from "@/components/ui/input";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Donation, DonationStatus, formSchema } from "@/lib/utils/donation";
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
import { useAuthContext } from "@/components/auth.context";
import { offerDonation } from "@/lib/firebase/donation";
import { useToast } from "@/components/ui/use-toast";

export default function ProfileForm() {
  const currentUser = useAuthContext();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: currentUser?.firstname || "",
      lastName: currentUser?.lastname || "",
      email: currentUser?.email || "",
      type: "Clothes",
      description: "",
      quantity: 1,
      location: "",
      images: [],
      date: new Date(), // Make sure date has a default value
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const uploadedImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      console.info(uploadedImages);
      form.setValue("images", uploadedImages);
    }
  };

  const handleDonationSubmit = form.handleSubmit(
    async (data) => {
      const donationData: Donation = {
        id: data.date.toISOString(),
        status: DonationStatus.Offered,
        userId: currentUser?.id,
        ...data,
      };
      try {
        await offerDonation(donationData);
        toast({
          title: "Donation offered",
        });
      } catch (err: any) {
        toast({
          title: "Error offering donation",
          description: err.message,
          variant: "destructive",
        });
      }
    },
    (errors) => {
      console.error("Info not valid", errors);
    }
  );

  const personalField = () => (
    <div>
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
    </div>
  );

  const donationField = () => (
    <div>
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Donation Type</FormLabel>
            <FormControl>
              <select
                className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           "
                defaultValue={field.value}
                onChange={field.onChange}
              >
                <option value={"Clothes"}>Clothes</option>
                <option value={"Food"}>Food</option>
                <option value={"Money"}>Money</option>
                <option value={"Other"}>Other</option>
              </select>
            </FormControl>
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
            <FormDescription>How many items are you donating?</FormDescription>
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
              Provide your residential Informations?
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
                      {field.value ? format(field.value, "PPP") : "Pick a date"}
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
              <Input type="file" multiple onChange={handleImageUpload} />
            </FormControl>
            <FormDescription>
              Upload images of the items you want to donate.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <CustomButton type="submit" className="max-w-sm w-4">
        Submit
      </CustomButton>
    </div>
  );

  return (
    <WavyBackground className="w-screen mx-auto pt-40">
      <Form {...form}>
        <form
          onSubmit={handleDonationSubmit}
          className="mx-auto dark:border-white/[0.2] rounded-md md:rounded-2xl p-4 md:p-8 shadow-input w-screen"
        >
          <div className="flex flex-row justify-around px-60">
            {personalField()}
            {donationField()}
          </div>
        </form>
      </Form>
    </WavyBackground>
  );
}
