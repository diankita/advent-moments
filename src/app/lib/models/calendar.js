import mongoose from 'mongoose';
import {calendarDaySchema} from './calendar-day';

//TODO add published at
const CalendarSchema = new mongoose.Schema({
  // _id: {type: mongoose.Schema.Types.ObjectId},
  title: {type: String, required: true},
  author: {type: String, required: true},
  startDate: {type: Date, default: Date.now},
  calendarDays: [calendarDaySchema],
});

const Calendar =
  mongoose.models.Calendar || mongoose.model('Calendar', CalendarSchema);
export default Calendar;
