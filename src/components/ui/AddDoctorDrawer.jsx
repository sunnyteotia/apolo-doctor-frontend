import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import api from "@/lib/api";

export default function AddDoctorDrawer() {
  const [form, setForm] = useState({ name: "", specialization: "", experience: 0, rating: 0, consultationFees: 0, location: "", imageUrl: "" });

  const handleSubmit = async () => {
    try {
      await api.post("/add-doctor", form);
      alert("Doctor added successfully");
    } catch (err) {
      alert("Failed to add doctor");
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="w-full">Add Doctor</Button>
      </DrawerTrigger>
      <DrawerContent className="p-4 space-y-2">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            className="border p-2 w-full"
            placeholder={key}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}
        <Button onClick={handleSubmit} className="w-full mt-4">Submit</Button>
      </DrawerContent>
    </Drawer>
  );
}