const mongoose = require("mongoose");

const buttonSchema = mongoose.Schema({
  label: { type: String, required: true }, // Button text
  link: { type: String, required: true }, // URL the button points to
  ctaType: { type: String, enum: ["primary", "secondary"], default: "primary" }, // Button type
});

const heroSchema = mongoose.Schema(
  {
    heading: { type: String, required: true },
    highlightedText: { type: String, required: true }, // Gradient part of heading
    subheading: { type: String, required: true },
    supportingLine: { type: String, required: true },
    buttons: {
      type: [buttonSchema], // Array of button objects
      default: [
        { label: "View Projects", link: "/projects", ctaType: "primary" },
        { label: "Contact Me", link: "/contact", ctaType: "secondary" },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero", heroSchema);
