const router=require("express").Router()
const Post=require("../models/post");
const User=require("../models/User");
//create a post
router.post("/",async(req,res)=>{
    const post=await new Post(req.body)
    try{
        savedpost=await post.save();
        res.status(200).json(savedpost);
    }catch(err){
        res.status(500).json(err)
    }

})



//update a post
router.put("/:id",async(req,res)=>{
   
    try{
        const post=await Post.findById(req.params.id);
       if(post.userId===req.body.userId)
       {
           await post.updateOne({$set:req.body});
           res.status(200).json("Post successfuly updated");
       }
       else{
           res.status(403).json("you can update only your post")
       }
        
    }catch(err){
        res.status(500).json(err)
    }

})

//delete a post
router.delete("/:id",async(req,res)=>{
   
    try{
        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId)
      
       {
           await Post.findByIdAndDelete(req.params.id);
           res.status(200).json("Post successfuly delted");
       }
       else{
           res.status(403).json("you can delete only your posts")
       }
        
    }catch(err){
        res.status(500).json(err)
    }

})

//like a post
router.put("/:id/like",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("post liked")
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("post disliked")
        }
        
        
    }catch(err){
        console.log(err);
    }
})


//get a post
router.get("/:id",async(req,res)=>{
   
    try{
       const post=await Post.findById(req.params.id);
        res.status(200).json(post);
       
    }catch(err){
        res.status(500).json(err)
    }

})

//get timeline post
router.get("/timeline/all",async(req,res)=>{
    try{
        const currentuser=await User.findById(req.body.userId);
        const userPost=await Post.find({userId:currentuser._id});
        const friendpost=await Promise.all(
            currentuser.following.map((friend)=>{
                return Post.find({userId:friend});
            })
        );
        res.json(userPost.concat(...friendpost))
    }catch(err){
        console.log(err);
    }
})

module.exports=router