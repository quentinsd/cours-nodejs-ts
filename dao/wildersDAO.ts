import mongoose, { Schema, model } from "mongoose";
import Skills from "../models/Skills";
import Wilder from "../models/Wilder";

const WilderSchema = new Schema<Wilder>({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});

const WilderModel = mongoose.model<Wilder>("Wilder", WilderSchema);

const wilderDAO = {
  read: () => WilderModel.find().exec(),
  create: (wilderName: string, city: string, skills: Array<Skills>) => {
    return WilderModel.init().then(() => {
      const wilder = new WilderModel({ name: wilderName, city, skills });
      return wilder.save();
    });
  },
  update: (wilderName: string, city: string, skills: Array<Skills>) =>
    WilderModel.updateOne({ name: wilderName }, { city, skills }),
  delete: (wilderName: string) => WilderModel.deleteOne({ name: wilderName }),
};
export default wilderDAO;
