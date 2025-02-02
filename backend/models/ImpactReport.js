import mongoose from 'mongoose';

const ImpactReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalCO2Saved: { type: Number, default: 0 },
  waterSaved: { type: Number, default: 0 },
  plasticWasteAvoided: { type: Number, default: 0 }
}, { timestamps: true });

const ImpactReport = mongoose.model('ImpactReport', ImpactReportSchema);

export default ImpactReport;
