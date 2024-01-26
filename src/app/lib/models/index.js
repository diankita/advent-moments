//edited by Rodwell

import mongoose from 'mongoose';

//process.env.MONGODB_URI had to remove this because it was causing an error when trying to connect to the database //Rodwell
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Advent' , {
      useNewUrlParser: true,// this was commented out but was added to fix a deprecation warning //Rodwell
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error);

  }
}

export default connectDB;
