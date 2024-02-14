"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";

type GradeForm = {
  currentGrade: string;
  // add other props here
};

export default function CalculatorPage() {
  const [error, setError] = useState("");
  const [form, setForm] = useState<GradeForm>({
    currentGrade: "",
    // add more properties here that will be needed for grade calculation
  });
  const [grade, setGrade] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    // prevents default submition which reloads the entire page
    e.preventDefault();

    // Your calculation logic here
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // spread the previous state into new state so we dont mutate it,
    // dependingon the name attribute on the inputs the correct field will get updated
    // you can use this function for every input that you need..
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <Card className="flex flex-col gap-2">
          <CardHeader>
            <CardTitle>Grade Calculator</CardTitle>
            <CardDescription>Calculate your grade</CardDescription>
          </CardHeader>
          <CardContent>
            <Label className="self-start">Current Grade</Label>
            <Input
              required
              name="currentGrade"
              onChange={handleFormChange}
              type="text"
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Calculate Grade</Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}
