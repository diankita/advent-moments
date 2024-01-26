//edited by Rodwell

import mongoose from 'mongoose';
import {calendarDaySchema} from './calendar-day';

const CalendarSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  startDate: {type: Date, default: Date.now},
 // publishedAt: {type: Date},// this will always be null because it's not being used //Rodwell
  calendarDays: [calendarDaySchema],
});

const Calendar =
  mongoose.models?.Calendar || mongoose.model('Calendar', CalendarSchema);
export default Calendar;
