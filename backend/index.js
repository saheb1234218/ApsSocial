const express =require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/post");
const corse=require("cors");


dotenv.config();


//mongoose connection
mongoose.connect("mongodb+srv://Social:Social1234@cluster0.eu6es.mongodb.net/Social?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>{
    console.log("mongodb  connected")
})


//middlewares
app.use(corse())
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);




app.listen(8800,()=>{
    console.log("backend server is running");
})