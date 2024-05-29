import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads"); // Destination folder where files will be stored
    },
    filename: function (req, file, cb) {
      // Generate a unique filename (e.g., using originalname + timestamp)
      cb(null, `${uuidv4()}_${path.extname(file.originalname)}` );
    },
  });

  const fileFilter = (req, file, cb) => {
    const allowedtype = ["image/jpg","image/jpeg","image/png"]
    if(allowedtype.includes(file.mimetype)){
        cb(null, true)
    }
    else{
        cb(null, false)
    }
    
  };



  export const uploadMiddleware =  multer({storage, fileFilter});