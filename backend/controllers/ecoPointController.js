import EcoPoint from '../models/EcoPoint.js';

export const createEcoPoint = async (req, res) => {
  try {
    const { userId, ecoPoints } = req.body;
    const newEcoPoint = new EcoPoint({ userId, ecoPoints });
    const savedEcoPoint = await newEcoPoint.save();
    res.status(201).json(savedEcoPoint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEcoPointByUserId = async (req, res) => {
  try {
    const ecoPoint = await EcoPoint.findOne({ userId: req.params.userId });
    if (!ecoPoint) {
      return res.status(404).json({ message: 'EcoPoint entry not found' });
    }
    res.status(200).json(ecoPoint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEcoPoint = async (req, res) => {
  try {
    const updatedEcoPoint = await EcoPoint.findOneAndUpdate(
      { userId: req.params.userId },
      { ecoPoints: req.body.ecoPoints },
      { new: true }
    );
    if (!updatedEcoPoint) {
      return res.status(404).json({ message: 'EcoPoint entry not found' });
    }
    res.status(200).json(updatedEcoPoint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEcoPoint = async (req, res) => {
  try {
    const deletedEcoPoint = await EcoPoint.findOneAndDelete({ userId: req.params.userId });
    if (!deletedEcoPoint) {
      return res.status(404).json({ message: 'EcoPoint entry not found' });
    }
    res.status(200).json({ message: 'EcoPoint entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
