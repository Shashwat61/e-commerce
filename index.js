const express=require('express')
const cors=require('cors')
const stripe=require('stripe')('key')//your secret key

const app=express()

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Suup Bitch")
})

app.post('/create-checkout-session',async(req,res)=>{
    const {cartItems}=req.body
    console.log(cartItems)

    const transformedItems=cartItems.map(item=>({
        description:item.description,
        quantity:1,
        price_data:{
            currency:'usd',
            unit_amount:item.price*100,
            product_data:{
                name:item.title,
                images:[item.image]
            },
        }
    }))
  
    const session=await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        shipping_rates:['shr_1J7mcuSHSJAkcpMnAEDyNpm3'],
        shipping_address_collection:{
            allowed_countries:['US','CA','GB'],
        },
        line_items:transformedItems,
        mode:'payment',
        success_url:'http://localhost:3000/success',
        cancel_url:'http://localhost:3000/cart',
        metadata:{
            images:JSON.stringify(cartItems.map(item=>item.image)),
        },
    })

  res.status(200).json({id:session.id})
})

//listen
app.listen(4242,()=>console.log('Listening on port 4242'))
