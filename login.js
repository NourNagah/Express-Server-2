const User= require('./user');
const loginFunc = async (req,res)=>{
    console.log(req)
    console.log(req.body)
    const email=req.body.email;
    const password = req.body.password;
    const person= await User.findOne({email:email, password:password}).exec();
    console.log(person);
    if(person){
        res.send("Successfull Login!");
    }else{
        res.send("Please try again!");
    }
};
module.exports=loginFunc;