'use server';

import {redirect} from 'next/navigation';
import connectDB from './models';
import Calendar from './models/calendar';
import {getCalendarById} from './data';
import {revalidatePath} from 'next/cache';

export async function createCalendar(formData) {
  await connectDB();

  const newCalendar = new Calendar({
    title: formData.get('title'),
    author: formData.get('author'),
  });

  let daysArr = new Array(24).fill();
  daysArr.forEach((day, index) => {
    const updatedCalendarDay = {
      dayNumber: index + 1,
      text: '',
      imageUrl: '',
      lastViewedAt: '',
    };
    daysArr[index] = updatedCalendarDay;
  });

  newCalendar.calendarDays = [...daysArr];

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

  redirect(`/edit/${newCalendar.id}/days`);
}

export async function editCalendar(calendarId, formData) {
  await connectDB();

  try {
    const editedCalendar = await Calendar.findByIdAndUpdate(calendarId, {
      title: formData.get('title'),
      author: formData.get('author'),
    });
    await editedCalendar.save();
  } catch (error) {
    console.log('Error editing data', error);
    throw new Error('Failed to edit data.');
  }
  revalidatePath(`/edit/${calendarId}/days`);
  redirect(`/edit/${calendarId}/days`);
}

export async function updateCalendarDay(calendarId, index, formData) {
  await connectDB();

  const calendar = await getCalendarById(calendarId);

  try {
    let updatedCalendarDay = calendar.calendarDays[index];

    updatedCalendarDay.text = formData.get('msg');
    updatedCalendarDay.imageUrl = formData.get('image_url');

    await calendar.save();
  } catch (error) {
    console.log('Error creating data', error);
    throw new Error('Failed to create data.');
  }

  redirect(`/edit/${calendarId}/days`);
}
