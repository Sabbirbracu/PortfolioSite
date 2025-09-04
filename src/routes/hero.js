const express = require("express");
const Hero = require("../models/Hero"); // Make sure you have Hero.js model
const router = express.Router();

// @desc    Get Hero Content
// @route   GET /api/hero
// @access  Public
router.get("/", async (req, res) => {
  try {
    const hero = await Hero.findOne();
    if (!hero) {
      return res.status(404).json({ message: "Hero content not found" });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update Hero Content
// @route   PUT /api/hero
// @access  Private (you can add auth later)
router.put("/", async (req, res) => {
  try {
    const { headline, subheading, supporting, ctaPrimary, ctaSecondary } =
      req.body;

    // Find and update hero content, or create if doesn't exist
    const hero = await Hero.findOneAndUpdate(
      {},
      { headline, subheading, supporting, ctaPrimary, ctaSecondary },
      { new: true, upsert: true }
    );

    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
