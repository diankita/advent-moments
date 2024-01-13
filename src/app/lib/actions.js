'use server';

import {redirect} from 'next/navigation';
import connectDB from './models';
import Calendar from './models/calendar';
import {getCalendarById} from './data';

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
    };
    daysArr[index] = updatedCalendarDay;
  });

  newCalendar.calendarDays = [...daysArr];
  console.log(newCalendar);

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

export async function updateCalendarDay(calendarId, index, formData) {
  await connectDB();

  const calendar = await getCalendarById(calendarId);

  console.log(calendarId);
  console.log(index);

  try {

    let updatedCalendarDay = calendar.calendarDays[index];
    if (updatedCalendarDay.text = '') {
      console.log('Missing message');
    } else {
      updatedCalendarDay.text = formData.get('msg');
      updatedCalendarDay.imageUrl = formData.get('image_url');
      updatedCalendarDay.lastViewedAt = Date.now();
  
      await calendar.save();

    };

  } catch (error) {
    console.log('Error creating data', error);
    throw new Error('Failed to create data.');
  }

  redirect(`/edit/${calendarId}/days`);
}
