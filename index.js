//...........requiring express.....
const express=require("express")
const app=express()
app.listen('8000',()=>{
    console.log("ok!! i am listening ,server is connected");
})
app.get('/',(req,res)=>{
    res.send("sended,server is running")
})
//..................require mongoose..............
const mongoose=require("mongoose")
async function main(){
    await mongoose.connect("mongodb://localhost:27017/myproject")
}
main()
.then(()=>{
    console.log("mongoose is connected");
})
.catch(err=>{
    console.log(err,"mongoose not connected properly");
})
//.................schema...........................
const ListSchema=new mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    price:String,
    character:String
})

// //.............model and collection.....................
const List=new mongoose.model("List",ListSchema)

// //conversions and requirements
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// const cors=require("cors")
// app.use(cors())

// //...............inserting data............
const Menu=[
    {
        id:1,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/174/6zgmyY14TQ2WqCxEEdENs8tSfI6bAJbq0bjljQOq.webp",
        name:"All-in-One Smart Casual Outfit Set",
        price:"$168.96",
        character:"Men"
    },
    {
        id:2,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/306/cFWJlmL8oJBhzD5sRzh3vp9Cyc2lnWP98fAnnqBH.webp",
        name:"Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
        price:"$168.96",
        character:"Kid"

    },
    {
        id:3,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/59/ifkPboTqNbmEaDE0Oiceb2gp518QoV6ISyfh24pL.webp",
        name:"AeroFit Women's Fitness Performance Jacket",
        price:"$168.96",
        character:"Women"

    },
    {
        id:4,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/184/46b2yaNraeL4zEOXSjzVUnKf50h3gFebIfs5axaa.webp",
        name:"Arctic Cozy Knit Unisex Beanie",
        price:"$168.96",
        character:"Kid"

    },
    {
        id:5,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/175/aKFTZ36lejYZmrAL5hlOWWiYCkN2BMXVUwM6z6bL.webp",
        name:"Arctic Frost Winter Accessories Bundle",
        price:"$168.96",
        character:"men"
    },
    {
        id:6,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/183/shw0pym2GqbsEbnuvsGLknszOzTjv2gDkYYDWGHn.webp",
        name:"Arctic Touchscreen Winter Gloves",
        price:"$168.96",
        character:"Men"
    },
    {
        id:7,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/185/jM27OiFkT55XpllZWgZqqqei9UrmBtHt6BAazrd2.webp",
        name:"Arctic Warmth Wool Blend Socks",
        price:"$168.96",
        character:"Men"
    },
    {
            id:8,
            image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/521/Ca725Cof60gloeFYBf4ccYnfkxGEh8G3LIgn1LVF.webp",
            name:"Adorable BunnyHop Baby Shoes",
            price:"$168.96",
            character:"Kid"
    },
    {
        
            id:9,
            image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/479/kExtv9yWu6yqFYHMrkZvDMR16FPfIWcplQqwGDI3.webp",
            name:"AquaStride Men's Stylish Waterproof Casual Sports Shoes",
            price:"$168.96",
            character:"Kid"    
    },
    {
        id:10,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/182/pJpBLP0t16lAXy62nHdYhjDgSWKzteiijuGu0QSJ.webp",
        name:"Arctic Bliss Stylish Winter Scarf",
        price:"$168.96",
        character:"Men"
    },
    {
        id:11,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/490/Sa1tXoevVuImsVSgfuxgy2ige8s9JRDcDkeczj0m.webp",
        name:"ChromaStride Men's Stylish Designer Multicolor Sports Shoes",
        price:"$168.96",
        character:"Men"
    },
    {
        id:12,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/69/tSbWNeRJ7n3rYb06TBVBaosCH1PSt0AAkBkik6Jk.webp",
        name:"Classic Elegance Men's Black Lace-Up Formal Leather Shoes",
        price:"$168.96",
        character:"Men"
    },
    {
        id:13,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/364/YQXMV1DpXN6yP0VEgrQRFcRhfrRIJMez5vyCY0AP.webp",
        name:"Azure Sculpted Slim Fit Women's Jeans",
        price:"$168.96",
        character:"Women"

    },
    {
        id:14,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/516/0bbKa6dwtDBAyC6GZwMa6SlqYoF4S3ntiu2zkRiI.webp",
        name:"Blooming Elegance Women's Designer Floral Print Flat Shoes",
        price:"$168.96",
        character:"Women"
    },
    {
        id:15,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/247/61Vx7cr6Uo5tX4ORY3llq8xVIpG0nkk5XO1ayEwI.webp",
        name:"Blue Skies Girls' Net Frocks with Stylish Bow",
        price:"$168.96",
        character:"Kid"
    },
    {
        id:16,
        image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/156/v8KMI3ptl7tpPmo0PS7HKi6ydQePBfw993ToAMrn.webp",
        name:"Beginner Yoga Tutorial- 300+ HD digital video tutorials for everyday practice",
        price:"$168.96",
        character:"Wellness"
    },
    
]

List.insertMany(Menu)
List.find()
.then((res)=>{
    console.log("menu inserted",res);
})


app.get('/menu', async(req, res) => {
    const items=await List.find()
    res.send(items)
});