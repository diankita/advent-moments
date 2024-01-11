import mongoose from 'mongoose';

const date = new Date().toISOString().split('T')[0];
//TODO add published at
const CalendarSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  startDate: {type: Date, default: date},
});

const Calendar = mongoose.models.Calendar || mongoose.model('Calendar', CalendarSchema);
export default Calendar;
