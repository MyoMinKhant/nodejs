import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    author: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    year: {
      type: int,
      required: true
    },
},

{
    timestamps: true
})

export default model("post", PostSchema)