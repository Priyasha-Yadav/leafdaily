import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePicture: { type: String },
  ecoPoints: { type: Number, default: 0 },
  sustainableHabits: [{ type: String }],
  impactReport: {
    totalCO2Saved: { type: Number, default: 0 },
    waterSaved: { type: Number, default: 0 },
    plasticWasteAvoided: { type: Number, default: 0 }
  }
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
