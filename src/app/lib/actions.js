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
    };
    daysArr[index] = updatedCalendarDay;
  });

  newCalendar.calendarDays = [...daysArr];

  try {
    if (!newCalendar.title || !newCalendar.author) {
      console.log('Missing entries');
    } else {
      await newCalendar.save();
      // console.log(test, 'when created from create action');
    }
  } catch (error) {
    console.log('Error creating data', error);
    throw new Error('Failed to create data.');
  }

  redirect(`/edit/${newCalendar.id}/days`);
}

export async function editCalendar(calendarId, formData) {
  await connectDB();

  console.log(calendarId, 'id from edit action');
  console.log(formData.get('title'), 'new title from edit action');

  // const editedCalendar = editCalendar({
  //   title: formData.get('title'),
  //   author: formData.get('author'),
  // });

  // const calendar = await getCalendarById(calendarId);

  try {
    const editedCalendar = await Calendar.findByIdAndUpdate(calendarId, {
      title: formData.get('title'),
      author: formData.get('author'),
    });
    await editedCalendar.save();
    console.log(editedCalendar, 'from edit action');
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

  console.log(calendarId, 'from update day action');
  console.log(index, 'from update day action');

  try {
    let updatedCalendarDay = calendar.calendarDays[index];

    updatedCalendarDay.text = formData.get('msg');
    updatedCalendarDay.imageUrl = formData.get('image_url');

    await calendar.save();
    console.log(calendar, 'from update day action');
  } catch (error) {
    console.log('Error creating data', error);
    throw new Error('Failed to create data.');
  }

  redirect(`/edit/${calendarId}/days`);
}
