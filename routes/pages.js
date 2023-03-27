const express=require('express');
const router =express.Router();
console.log("inside pages");
router.get('/',(req,res)=>{
    console.log("inside pages index");
    res.render("index");
});
router.get("/login",(req,res)=>{
    res.render("login");
});
router.get("/sinuppage",(req,res)=>{
    res.render("sinuppage");
});
module.exports=router;