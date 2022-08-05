import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    name:  String,
    imgURL: String,
  });

export default mongoose.model("Cards", schema)