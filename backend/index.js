import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";
import ImgModel from './models/imageModel.js';


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join(__dirname, 'uploads'))
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage });


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN stack');
});

app.get('/api/view/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await ImgModel.findById(userId);

    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/upload', upload.single('file') ,(req,res) => {
    ImgModel.create({ image: req.file.filename })
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

app.put('/api/update/:userId', upload.single('file'), async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await ImgModel.findByIdAndUpdate(userId, {
      image: req.file.filename,
    }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is running on ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


      
    