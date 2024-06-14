"use client"

import React, { useState } from "react";
import { Donation, DonationType } from "@/lib/utils/donation";

const DonateForm: React.FC = () => {
  const [donation, setDonation] = useState<Donation>({
    type: DonationType.CLOTHES,
    description: "",
    quantity: 0,
    location: "",
    date: new Date(),
    images: [],
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setDonation((prevDonation: any) => ({
      ...prevDonation,
      [name]: value,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const uploadedImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setDonation((prevDonation: Donation) => ({
        ...prevDonation,
        images: [...prevDonation.images, ...uploadedImages],
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(donation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donation Type:
        <select name="type" value={donation.type} onChange={handleInputChange}>
          <option value={DonationType.CLOTHES}>Clothes</option>
          <option value={DonationType.FOOD}>Food</option>
          <option value={DonationType.MONEY}>Money</option>
          <option value={DonationType.OTHER}>Other</option>
        </select>
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={donation.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={donation.quantity}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={donation.location}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={donation.date.toISOString().split("T")[0]}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Images:
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
      </label>
      <br />
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonateForm;
