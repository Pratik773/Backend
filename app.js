const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"));
const port = 8080;
app.get("/home", (req, res) => {
  res.render("home_page");
});

// const medicineSchema = new mongoose.Schema({
//   medicineId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   category: {
//     type: String,
//     required: true
//   },
//   currentStock: {
//     type: Number,
//     required: true
//   },
//   maxStock: {
//     type: Number,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['Critical', 'Low', 'Good', 'Excellent'],
//     default: 'Good'
//   }
// }, {
//   timestamps: true
// });

// // Calculate stock level and status before saving
// medicineSchema.pre('save', function(next) {
//   // Calculate stock level ratio
//   const stockRatio = (this.currentStock / this.maxStock) * 100;

//   // Determine status based on stock level
//   if (stockRatio <= 15) {
//     this.status = 'Critical';
//   } else if (stockRatio <= 30) {
//     this.status = 'Low';
//   } else if (stockRatio <= 70) {
//     this.status = 'Good';
//   } else {
//     this.status = 'Excellent';
//   }

//   next();
// });

// // Virtual for stock level display
// medicineSchema.virtual('stockLevel').get(function() {
//   return `${this.currentStock} / ${this.maxStock} ${this.getUnitType()}`;
// });

// // Method to get unit type based on medicine name
// medicineSchema.methods.getUnitType = function() {
//   const name = this.name.toLowerCase();
//   if (name.includes('vial') || name === 'insulin') return 'vials';
//   if (name.includes('tablet') || name === 'paracetamol') return 'tablets';
//   if (name.includes('pack') || name === 'antibiotics') return 'packs';
//   if (name.includes('roll') || name === 'bandages') return 'rolls';
//   return 'units';
// };

// module.exports = mongoose.model('Medicine', medicineSchema);

app.listen(port, (req, res) => {
  console.log("hello");
});
