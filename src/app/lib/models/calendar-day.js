import mongoose from 'mongoose';

export const calendarDaySchema = new mongoose.Schema({
  dayNumber: {type: Number},
  text: {type: String},
  imageUrl: {type: String},
  videoUrl: {type: String},
  lastViewedAt: {type: Date}
  // calendarId: {type: String, required: true}
});

const CalendarDay =
  mongoose.models?.CalendarDay ||
  mongoose.model('CalendarDay', calendarDaySchema);
export default CalendarDay;
