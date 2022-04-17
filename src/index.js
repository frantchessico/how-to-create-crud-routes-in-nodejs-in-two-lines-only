import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

import { mongodbConnection } from './config/mongodb';
import { router } from './routes/routes'; 




const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/products', router); 


const port = process.env.PORT || 4200;
app.listen(port, () => {
  mongodbConnection()  
  console.log(`Server is running on http://localhost:port`)  
})