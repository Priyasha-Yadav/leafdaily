import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  description: { type: String, required: true },
  ecoPointsReward: { type: Number, required: true },
  category: { type: String, required: true },
  difficultyLevel: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

export default Task;
