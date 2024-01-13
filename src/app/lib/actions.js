'use server';

import { redirect } from "next/navigation";
import connectDB from "./models";
import Calendar from "./models/calendar";
import CalendarDay from "./models/calendar-day";

let calId;

export async function createCalendar(formData) {
  await connectDB();

  const newCalendar = new Calendar ({
    title: formData.get('title'),
    author: formData.get('author'),
  });

  const newCalendarDay = {
    text: '',
    imageUrl: '',
  };
  //TODO create Array - fill with 24 days and forEach -> push to newCalendar  

  newCalendar.calendarDays.push(newCalendarDay);
  console.log(newCalendar)

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

console.log(calId)

export async function createCalendarDay(formData) {
  await connectDB();

  const newCalendarDay = new CalendarDay({
    text: formData.get('msg'),
    imageUrl: formData.get('image_url'),
    calendar: calId,
  });
  console.log(newCalendarDay);
  console.log(newCalendarDay.calendar)

  try {
    if (!newCalendarDay.text) {
      console.log('Missing message');
    } else {
      await newCalendarDay.save();
    }
  } catch (error) {
    console.log('Error creating data', error);
    throw new Error('Failed to create data.');
  }

  // redirect(`/edit/${newCalendarDay.calendarId}/days`);
}