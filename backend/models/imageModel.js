import mongoose from "mongoose";

const imgSchema = mongoose.Schema(
    {
        image:String
    }
)


const ImgModel = mongoose.model('Img', imgSchema);

export default ImgModel;