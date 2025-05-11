"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

export default function StoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("https://getform.io/f/amdkzqmb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", story: "" }); // Reset form
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Card className="w-full max-w-md bg-white border-0 shadow-none p-0">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl text-primary font-semibold">Berbagi Cerita</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="sr-only">
                NAMA
              </Label>
              <Input id="name" name="name" placeholder="NAMA" value={formData.name} onChange={handleChange} className="w-full bg-white border border-gray-300 rounded" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                E-MAIL
              </Label>
              <Input id="email" name="email" type="email" placeholder="E-MAIL" value={formData.email} onChange={handleChange} className="w-full bg-white border border-gray-300 rounded" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="story" className="sr-only">
                CERITA
              </Label>
              <Textarea id="story" name="story" placeholder="CERITA" value={formData.story} onChange={handleChange} className="w-full bg-white border border-gray-300 rounded min-h-32" />
            </div>

            <Button onClick={handleSubmit} className="w-32 bg-primary text-white font-medium py-2 px-4 rounded-3xl mx-auto block">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
