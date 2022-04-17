import mongoose from 'mongoose';


const url = process.env.MONGODB_URI; 

export const mongodbConnection = async () => {
 try {
   await mongoose.connect(url); 
   console.log('Database connected successfully')}
 catch (error) {
    console.log('An error occurred while connecting: ',error) 
}}