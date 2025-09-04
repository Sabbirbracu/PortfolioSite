const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
    headline: { type: String, required: true },
    subheading: { type: String, required: true },
    supporting: { type: String, required: true },
    ctaPrimary: { type: String, required: true },
    ctaSecondary: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero", heroSchema);
