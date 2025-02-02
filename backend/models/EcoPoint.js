import mongoose from 'mongoose';

const EcoPointSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ecoPoints: { type: Number, required: true },
  },
  { timestamps: true, collection: "EcoPoints" } 
);

const EcoPoint = mongoose.model("EcoPoint", EcoPointSchema);

export default EcoPoint;
