const express = require('express');
const router = express.Router();
const Invoice = require('./invoice');
router.get('/:invoiceId/calculateTotal', async (req, res) => {
    try {
      const invoice = await Invoice.findById(req.params.invoiceId);
      if (!invoice) {
        return res.status(404).json({ error: 'Invoice not found' });
      }
  
      let totalCost = 0;
      for (const item of invoice.items) {
        const itemCost = item.price * item.stock;
        totalCost += itemCost;
      }
  
      const taxRate = 0.3; 
      const taxes = totalCost * taxRate;
      totalCost += taxes;
      const discount=0.25
      totalCost=totalCost*discount
      res.json({ totalCost, taxes });
    } catch (error) {
      res.status(500).json({ error: 'Error calculating total cost' });
    }
  });
  