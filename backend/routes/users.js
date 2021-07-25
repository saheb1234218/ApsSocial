const router=require("express").Router();
const User=require("../models/User");

//update user
router.put("/:id",async(req,res)=>{
    
        try{
            if(req.body.userId===req.params.id)
        {
            const user=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
        
            res.status(200).json(user)
        }
        else{
             res.status(403).json("you can update only ur acc");
        }
        }catch(err){
           console.log(err)
        }
});



//delete user

router.delete("/:id",async(req,res)=>{
    
    try{
        if(req.body.userId===req.params.id)
    {
        await User.findByIdAndDelete(req.params.id);
    
        res.status(200).json("your account has been deleted successfully")
    }
    else{
         res.status(403).json("you can delete only ur acc");
    }
    }catch(err){
       console.log(err)
    }
});

//get a user
router.get("/:id",async(req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        const {password,updatedAt,...other}=user._doc
        res.status(200).json(other)
    }catch(err){
        console.log(err)
    }
})

//follow a user
router.put("/:id/follow",async(req,res)=>{
    if(req.body.userId!==req.params.id)
    {
        try{
            const user=await User.findById(req.params.id);
            const currentuser=User.findById(req.body.userId);
            if(!user.followers.includes(req.body.uerId)){
                await user.updateOne({$push:{followers: req.body.userId}});
                await currentuser.updateOne({$push:{following: req.params.id}})
                res.status(200).json("user followed")
            }
            else{
                res.status(403).json("you already follow the user")
            }
        }catch(err){
            console.log(err)
        }
    }
    else{
        res.status(403).json("you cant follow yourself")
    }
})
//unfollow a user
router.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userId!==req.params.id)
    {
        try{
            const user=await User.findById(req.params.id);
            const currentuser=User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId))
            {
                await user.updateOne({$pull:{followers: req.body.userId}});
                await currentuser.updateOne({$pull:{following: req.params.id}})
                res.status(200).json("user unfollowed")
            }
            else{
                res.status(403).json("you dont follow the user")
            }
        }catch(err){
            console.log(err)
        }
    }
    else{
        res.status(403).json("you cant unfollow yourself")
    }
})



module.exports= router