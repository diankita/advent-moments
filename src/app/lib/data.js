import connectDB from './models';
import Calendar from './models/calendar';

export async function getAllCalendars() {
  await connectDB();

  try {
    const calendars = await Calendar.find({});
    return calendars;
  } catch (error) {
    console.log('Error fetching data', error);
    throw new Error('Failed to fetch data.');
  }
}

export async function getCalendarById(id) {
  await connectDB();

  try {
    const calendarById = await Calendar.findById(id);
    return calendarById;
  } catch (error) {
    console.log('Error fetching data', error);
    throw new Error('Failed to fetch data.');
  }
}

export async function getDayInfo() {}
