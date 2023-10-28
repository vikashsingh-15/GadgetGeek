// const express=required('express');//no more needed was done earlier after version 15 it is not required and ES6 concept started

import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';




const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(`/`,Router);


const PORT=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(PORT,() => console.log(`Server is running super good fast on port ${PORT}`));
DefaultData();




//NOTE

/*
1. we have to initailaze express thus const app=express();
2. app.listen create expree server it takes two argument 1st port 2nd is call back function ie it will work once server start running

 */