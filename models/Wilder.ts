import mongoose from "mongoose";
import Skills from "./Skills";

interface Wilder {
  name: string;
  city: string;
  skills: Array<Skills>;
}

export default Wilder;
