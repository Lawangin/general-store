const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//routes
app.get('/repeat', async (req, res) => {
  try {
    const repeatQuery = await pool.query(`SELECT customerName, Customer.customerID, COUNT(*) AS NumberOfVisits
    FROM Sale, Customer
    WHERE Sale.customerID = Customer.customerID
    GROUP BY customerName, Customer.customerID
    HAVING COUNT(*) > 1`)
    res.json(repeatQuery.rows)
    console.log('success')
  } catch (err) {
    console.error(err.message)
  }
})

app.get('/most-spent', async (req, res) => {
  try {
    const mostSpent = await pool.query(`SELECT customerName, total 
    FROM Sale, Customer
    WHERE total = (SELECT MAX(total) FROM Sale) 
    AND Sale.customerID = Customer.customerID`)

    res.json(mostSpent.rows)
    console.log('success')
  } catch (err) {
    console.log(err.message)
  }
})

app.get('/customer-count', async (req, res) => {
  try {
    const custCount = await pool.query(`SELECT COUNT(*) AS CustomerCount
    FROM Customer`)

    res.json(custCount.rows)
    console.log('success')
  } catch (err) {
    console.log(err.message)
  }
})

app.get('/largest-item-count', async (req, res) => {
  try {
    const itemCount = await pool.query(`SELECT itemName, Quantity
    FROM (
    SELECT itemID, Quantity FROM
    (SELECT itemID, SUM(quantity) AS Quantity
    FROM Cart
    GROUP BY itemID) AS totals
    ORDER BY Quantity DESC) AS TopItem, Item
    WHERE Item.itemID = TopItem.itemID
    FETCH first 1 rows only`)

    res.json(itemCount.rows)
    console.log('success')
  } catch (err) {
    console.log(err.message)
  }
})

app.listen(4000, () => {
  console.log('server has started on port 4000')
})
