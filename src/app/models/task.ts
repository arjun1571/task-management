import mongoose, { Schema, Document } from "mongoose";

interface ITask extends Document {
  name: string;
  email: string;
}

const taskSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Task = mongoose.models.Task || mongoose.model<ITask>("Task", taskSchema);

export default Task;
