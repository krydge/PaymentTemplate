// sk_test_51N6xSvBx51FhtWheFGIEwSfdAKGrDDULGfb7XDfsEPcRL0JgaYofz3mheB1TXqwnznjqKNPJiIaUn7QUik2Y2WQF00d8Iz0ysy
// Coffee: price_1N6xXfBx51FhtWhe533Nu4lM
// Sunglassess: price_1N6xZABx51FhtWhesSZdBh6b
// Camera: price_1N6xa5Bx51FhtWheBOFuo4k7

const express = require('express')
const cors = require('cors')
const exp = require('constants')
const stripe = require('stripe')("sk_test_51N6xSvBx51FhtWheFGIEwSfdAKGrDDULGfb7XDfsEPcRL0JgaYofz3mheB1TXqwnznjqKNPJiIaUn7QUik2Y2WQF00d8Iz0ysy")
const app = express()
const port = 4000

app.use(cors());
app.use(express.static("public"))

app.use(express.json())

app.post("/checkout", async (req, res) => {
    console.log(req.body)
    const items = req.body.items;
    let lineItems = []
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    });
    console.log(lineItems)
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    })
    res.send(JSON.stringify({
        url: session.url,
    }))

})

app.listen(port, () => { console.log("[Server]-- listening on port: " + port) })