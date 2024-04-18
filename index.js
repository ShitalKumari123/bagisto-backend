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
    await mongoose.connect("mongodb://localhost:27017/mainprojectBagisto")
}
main()
.then(()=>{
    console.log("mongoose is connected");
})
.catch(err=>{
    console.log(err,"mongoose not connected properly");
})


app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cors=require("cors")
app.use(cors())
//.........................................................................................................
//................. 1st schema...........................
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
// const Menu=[
//     {
//         id:1,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/174/6zgmyY14TQ2WqCxEEdENs8tSfI6bAJbq0bjljQOq.webp",
//         name:"All-in-One Smart Casual Outfit Set",
//         price:"$168.96",
//         character:"Men"
//     },
//     {
//         id:2,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/306/cFWJlmL8oJBhzD5sRzh3vp9Cyc2lnWP98fAnnqBH.webp",
//         name:"Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
//         price:"$168.96",
//         character:"Kid"

//     },
//     {
//         id:3,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/59/ifkPboTqNbmEaDE0Oiceb2gp518QoV6ISyfh24pL.webp",
//         name:"AeroFit Women's Fitness Performance Jacket",
//         price:"$168.96",
//         character:"Women"

//     },
//     {
//         id:4,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/184/46b2yaNraeL4zEOXSjzVUnKf50h3gFebIfs5axaa.webp",
//         name:"Arctic Cozy Knit Unisex Beanie",
//         price:"$168.96",
//         character:"Kid"

//     },
//     {
//         id:5,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/175/aKFTZ36lejYZmrAL5hlOWWiYCkN2BMXVUwM6z6bL.webp",
//         name:"Arctic Frost Winter Accessories Bundle",
//         price:"$168.96",
//         character:"men"
//     },
//     {
//         id:6,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/183/shw0pym2GqbsEbnuvsGLknszOzTjv2gDkYYDWGHn.webp",
//         name:"Arctic Touchscreen Winter Gloves",
//         price:"$168.96",
//         character:"Men"
//     },
//     {
//         id:7,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/185/jM27OiFkT55XpllZWgZqqqei9UrmBtHt6BAazrd2.webp",
//         name:"Arctic Warmth Wool Blend Socks",
//         price:"$168.96",
//         character:"Men"
//     },
//     {
//             id:8,
//             image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/521/Ca725Cof60gloeFYBf4ccYnfkxGEh8G3LIgn1LVF.webp",
//             name:"Adorable BunnyHop Baby Shoes",
//             price:"$168.96",
//             character:"Kid"
//     },
//     {
        
//             id:9,
//             image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/479/kExtv9yWu6yqFYHMrkZvDMR16FPfIWcplQqwGDI3.webp",
//             name:"AquaStride Men's Stylish Shoes",
//             price:"$168.96",
//             character:"Kid"    
//     },
//     {
//         id:10,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/182/pJpBLP0t16lAXy62nHdYhjDgSWKzteiijuGu0QSJ.webp",
//         name:"Arctic Bliss Stylish Winter Scarf",
//         price:"$168.96",
//         character:"Men"
//     },
//     {
//         id:11,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/490/Sa1tXoevVuImsVSgfuxgy2ige8s9JRDcDkeczj0m.webp",
//         name:"ChromaStride Men's Stylish Sports Shoes",
//         price:"$168.96",
//         character:"Men"
//     },
//     {
//         id:12,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/69/tSbWNeRJ7n3rYb06TBVBaosCH1PSt0AAkBkik6Jk.webp",
//         name:"Classic Elegance Men's Black Shoes",
//         price:"$168.96",
//         character:"Men"
//     },
//     {
//         id:13,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/364/YQXMV1DpXN6yP0VEgrQRFcRhfrRIJMez5vyCY0AP.webp",
//         name:"Azure Sculpted Slim Fit Women's Jeans",
//         price:"$168.96",
//         character:"Women"

//     },
//     {
//         id:14,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/516/0bbKa6dwtDBAyC6GZwMa6SlqYoF4S3ntiu2zkRiI.webp",
//         name:"Blooming Elegance Women's Flat Shoes",
//         price:"$168.96",
//         character:"Women"
//     },
//     {
//         id:15,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/247/61Vx7cr6Uo5tX4ORY3llq8xVIpG0nkk5XO1ayEwI.webp",
//         name:"Blue Skies Girls' Net Frocks",
//         price:"$168.96",
//         character:"Kid"
//     },
//     {
//         id:16,
//         image:"https://demo.bagisto.com/bagisto-common/cache/medium/product/156/v8KMI3ptl7tpPmo0PS7HKi6ydQePBfw993ToAMrn.webp",
//         name:"Beginner Yoga Tutorial",
//         price:"$168.96",
//         character:"Wellness"
//     },
    
// ]

// List.insertMany(Menu)
// List.find()
// .then((res)=>{
//     console.log("menu inserted",res);
// })


app.get('/menu', async(req, res) => {
    const items=await List.find()
    res.send(items)
});
//..............................................................................................................
//....................2nd schema..............................
const ProductListSchema=new mongoose.Schema(
    {
        id:Number,
        image:String,
        name:String,
        price:String,
        description:String,
        details:String
    }
)
//..................2nd collection........................
const ProductList=new mongoose.model("ProductList",ProductListSchema)

//..................Inserting data.........................
// const FourCards = [
//     {
//       id: 1,
//       image:
//         "https://demo.bagisto.com/bagisto-common/cache/medium/product/174/6zgmyY14TQ2WqCxEEdENs8tSfI6bAJbq0bjljQOq.webp",
//       name: "All-in-One Smart Casual Outfit Set",
//       price: "$167.96",
//       description:"Elevate your fashion game with our All-in-One Smart Casual Outfit Set. This complete look includes an open full sleeve smart jacket, a blue full sleeve t-shirt, grey denim jeans, and sneaker shoes. Crafted from high-quality materials, this set offers a coordinated and hassle-free fashion choice for various occasions, ensuring you look stylish and comfortable.",
//       detail:"Introducing the All-in-One Smart Casual Outfit Set, your ticket to effortless style and comfort for various occasions. This complete outfit set is designed to make your fashion choices easy and stylish. It includes everything you need for a smart and casual look, so you can dress confidently without worrying about coordinating individual pieces. The open full sleeve smart jacket adds a touch of sophistication to your ensemble. It's perfect for layering and creating a polished look, whether you're heading to the office or a dinner date. The stylish blue full-sleeve t-shirt is a versatile addition to your wardrobe. It adds a trendy and eye-catching element to your outfit, making it suitable for casual outings, parties, or just hanging out with friends. The grey denim jeans are a classic choice that offers both style and comfort. They are perfect for various occasions, from a laid-back day at the park to a night out in the city. Completing the ensemble, the sneaker shoes provide the finishing touch of style and comfort. They are suitable for all-day wear and keep your feet feeling fresh, whether you're running errands or exploring the town. Each piece of this outfit set is crafted from high-quality materials to ensure comfort and durability. The coordinated look saves you time and effort, so you can focus on enjoying your day. Elevate your fashion game with the All-in-One Smart Casual Outfit Set. This set is more than just clothing; it's a reflection of your desire for style and convenience. Let it simplify your fashion choices and elevate your look for any occasion, making you stand out with ease and confidence."
//     },
//     {
//       id: 2,
//       image:
//         "https://demo.bagisto.com/bagisto-common/cache/medium/product/521/Ca725Cof60gloeFYBf4ccYnfkxGEh8G3LIgn1LVF.webp",
//       name: "Adorable BunnyHop Baby Shoes",
//       price: "$166.96",
//       description:"Introducing BunnyHop Baby Shoes, the cutest addition to your baby's wardrobe. These adorable bunny design shoes are made from high-quality silicone rubber, providing softness, comfort, and durability. With a non-slip sole for added safety, these shoes are easy to clean and maintain, making them perfect for your little one's tiny feet.",
//       detail:"BunnyHop Baby Shoes are the epitome of cuteness and comfort, designed to make your baby's first steps an adorable adventure. The star of these shoes is the delightful bunny design that adorns them. Your little one will look absolutely precious with these bunny-themed shoes that are sure to bring smiles to everyone who sees them. These baby shoes are not just about looks; they are crafted from high-quality silicone rubber, ensuring that they are soft, comfortable, and durable. The pliability of silicone rubber makes these shoes ideal for tiny feet, allowing for natural movement while providing support. Safety is a top priority, and these shoes feature a non-slip sole, offering stability and security as your baby takes their first steps or enjoys playtime. Cleaning and maintaining these shoes is a breeze. You can easily wipe off any spills or dirt, ensuring that your baby's feet remain snug and clean. Elevate your baby's style and comfort with BunnyHop Baby Shoes. These shoes are more than just baby footwear; they are a reflection of the joy and cuteness that your baby brings into your life. Let your little one hop into each new day with adorable bunny-themed shoes that celebrate the early stages of their life's journey."
//     },
//     {
//       id: 3,
//       image:
//         "https://demo.bagisto.com/bagisto-common/cache/medium/product/182/pJpBLP0t16lAXy62nHdYhjDgSWKzteiijuGu0QSJ.webp",
//       name: "Arctic Bliss Stylish Winter Scarf",
//       price: "$168.96",
//       description:"Experience the embrace of warmth and style with our Arctic Bliss Winter Scarf. Crafted from a luxurious blend of acrylic and wool, this cozy scarf is designed to keep you snug during the coldest days. Its stylish and versatile design, combined with an extra-long length, offers customizable styling options. Elevate your winter wardrobe or delight someone special with this essential winter accessory.",
//       detail:"The Arctic Bliss Winter Scarf is more than just a cold-weather accessory; it's a statement of warmth, comfort, and style for the winter season. Crafted with care from a luxurious blend of acrylic and wool, this scarf is designed to keep you cozy and snug even in the chilliest temperatures. The soft and plush texture not only provides insulation against the cold but also adds a touch of luxury to your winter wardrobe. The design of the Arctic Bliss Winter Scarf is both stylish and versatile, making it a perfect addition to a variety of winter outfits. Whether you're dressing up for a special occasion or adding a chic layer to your everyday look, this scarf complements your style effortlessly. The extra-long length of the scarf offers customizable styling options. Wrap it around for added warmth, drape it loosely for a casual look, or experiment with different knots to express your unique style. This versatility makes it a must-have accessory for the winter season. Looking for the perfect gift? The Arctic Bliss Winter Scarf is an ideal choice. Whether you're surprising a loved one or treating yourself, this scarf is a timeless and practical gift that will be cherished throughout the winter months. Embrace the winter with the Arctic Bliss Winter Scarf, where warmth meets style in perfect harmony. Elevate your winter wardrobe with this essential accessory that not only keeps you warm but also adds a touch of sophistication to your cold-weather ensemble."
//     },
//     {
//       id: 4,
//       image:
//         "https://demo.bagisto.com/bagisto-common/cache/medium/product/306/cFWJlmL8oJBhzD5sRzh3vp9Cyc2lnWP98fAnnqBH.webp",
//       name: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
//       price: "$268.96",
//       description:"Let your little adventurer stand out in our Adventure Seeker Boys' Half Sleeve Graphic T-Shirt. The eye-catching graphic design adds a playful and trendy element to his outfit. Crafted from a soft and breathable fabric, this t-shirt is perfect for various casual occasions, ensuring both comfort and style. ",
//       detail:"Inspire your little explorer with our Adventure Seeker Boys' Half Sleeve Graphic T-Shirt. This t-shirt features an eye-catching graphic design, perfect for igniting a sense of adventure and playfulness in your child. The half sleeve design ensures comfort and style, making it suitable for everyday wear. The soft and breathable cotton blend fabric provides a gentle and cozy feel against your child's skin, allowing him to stay comfortable all day long. This t-shirt is versatile and can be easily paired with different bottoms, allowing your child to create a variety of outfits. Whether it's a day at school, a casual outing, or a playdate with friends, this graphic t-shirt is a trendy choice that your little adventurer will love. Let your child's imagination roam free with our Adventure Seeker Boys' Half Sleeve Graphic T-Shirt. It's more than just a t-shirt; it's an invitation to embrace the spirit of adventure and create unforgettable childhood memories. Watch your little one shine in this playful and stylish t-shirt, designed for young explorers and adventure seekers."
//     },
//   ];
  
// ProductList.insertMany(FourCards)
// ProductList.find()
// .then((res)=>{
//     console.log("2nd menu inserted",res);
// })

app.get('/productlist',async(req,res)=>{
const item2=await ProductList.find()
res.send(item2)
})

//..............................................3rd schema admin panel...........
//...............................schema designing...........................
const userSchema = new mongoose.Schema({                                                   //......change....1
    name: String,
    password: String,
    email:String,
    dob:Number,
    address:String,
    phoneNumber: Number
  });
  
  //...............................model creation.................................
  const User=new mongoose.model("User",userSchema)

  //...............................taking data from frontend........................
app.post('/adm',async(req,res)=>{
    const {name,password,email, dob,address,phoneNumber}=req.body                                              //...change...3

    //......................inserting data in collection or model named user...........
const User1=new User({                                                                    //...change....2
    name:name,
    password:password,
    email:email,
    dob:dob,
    address:address,
    phoneNumber:phoneNumber
})

 await User1.save()
 .then(()=>{
    console.log("saved");
  })
  .catch((err)=>{
    console.log("error thrown");
  })
})

app.get('/admprofile',async(req,res)=>{
    const store=await User.find()
    res.send(store)
})
