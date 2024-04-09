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
    await mongoose.connect("mongodb://localhost:27017")
}
main()
.then(()=>{
    console.log("mongoose is connected");
})
.catch(err=>{
    console.log(err,"mongoose not connected properly");
})

