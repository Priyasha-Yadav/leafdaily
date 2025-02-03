import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  achievements: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      dateAchieved: { type: Date, required: true }
    }
  ]
}, { timestamps: true });

const Achievement = mongoose.model('Achievement', AchievementSchema);

export default Achievement;
