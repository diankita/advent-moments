'use server';

import { redirect } from "next/navigation";
import connectDB from "./models";
import Calendar from "./models/calendar";

export async function createCalendar(formData) {
  await connectDB();

  const newCalendar = new Calendar ({
    title: formData.get('title'),
    author: formData.get('author'),
  });
  console.log(newCalendar.id);


  try {
    if (!newCalendar.title || !newCalendar.author) {
      console.log('Missing entries');
    } else {
      await newCalendar.save();
    }
  } catch (error) {
    console.log('Error creating data', error);
    throw new Error('Failed to create data.');
  }

  redirect(`/edit/${newCalendar.id}/days`)
}