import mongoose from 'mongoose';

const calendarDaySchema = new mongoose.Schema({
  dayNumber: {type: Number},
  text: {type: String, required: true},
  imageUrl: {type: String},
  videoUrl: {type: String},
  lastViewedAt: {type: Date, default: Date.now},
  calendarId: {type: mongoose.Schema.Types.ObjectId, ref: 'Calendar'},
});

const CalendarDay =
  mongoose.models.CalendarDay ||
  mongoose.model('CalendarDay', calendarDaySchema);
export default CalendarDay;

// import mongoose from "mongoose";

// // // Check if 'event' model already exists
// let Event;

// try {
//   Event = mongoose.model('event');
// } catch (error) {
//   // Define 'event' model
//   const EventSchema = mongoose.Schema({
//     // Schema definition here
//     title: {type: String, required: true},
//       date: {type: Date, required: true},
//       venue: {type: String, required: true},
//   });

//   Event = mongoose.model('event', EventSchema);
// }

// export default Event;
