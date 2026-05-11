const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Item name is required'],
    trim: true
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
    default: 0
  },
  unit: {
    type: String,
    enum: ['kg', 'g', 'L', 'ml', 'pcs', 'boxes', 'bags', 'bottles'],
    default: 'pcs'
  },
  category: {
    type: String,
    enum: ['Beverages', 'Dairy', 'Dry Goods', 'Baked Goods', 'Sweeteners', 'Equipment', 'Other'],
    default: 'Other'
  },
  minStock: {
    type: Number,
    default: 5
  },
  price: {
    type: Number,
    default: 0
  },
  supplier: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);
