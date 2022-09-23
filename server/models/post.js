const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    likes: [{ type: ObjectID, ref: "USER" }],
    comments: [
      {
        text: String,
        postedBy: { type: ObjectID, ref: "User" },
      },
    ],
    postedBy: {
      type: ObjectID,
      ref: "User",
    },
  },
  { timestamps: true }
);

mongoose.model("Post", postSchema);
