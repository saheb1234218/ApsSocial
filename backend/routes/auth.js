const router=require("express").Router();
const User=require("../models/User");



//Register
router.post("/register",async (req,res)=>{
    const newUser= new User({
        username: req.body.username,
        email: req.body.email,
        password:req.body.password,
    });
    try{
        const user= await newUser.save();
         res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
});

//login
router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        !user && res.status(404).send("user not found")
        if(user.password!==req.body.password)
        {
            res.status(400).json("wrong password")
        }
        
        res.status(200).json(user)
    }catch(err){
        console.log(err)

    }
    
})




module.exports= router