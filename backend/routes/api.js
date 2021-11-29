const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

require('../app/config/db/conn')
const User = require('../app/models/userSchema');

router.post('/register', (req, res) => {
    // console.log(req.body);

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ message: "required filed is empty" })
    }

    User.findOne({ email: email }).then((userExit) => {
        if (userExit) {
            return res.status(422).json({ message: "Email alredy exits" })
        } else if (password != cpassword) {
            return res.status(422).json({ message: "password and conform password not matcing" })

        } else {

            const user = new User({ name, email, phone, password, cpassword });

            //hasing password and cpassword middleware in userscema is used 

            user.save().then(() => {
                return res.status(201).json({ message: "User registerd succesfully" });
            }).catch((err) => {
                return res.status(500).json(err)
            });
        }

    }).catch((err) => {
        console.log(err);
    })

    //  return res.json({message : req.body})
});

//sign In route 
router.post('/signin', async (req, res) => {
    // console.log(req.body);
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ message: "required filed is empty" });

        }
        const userLogin = await User.findOne({ email: email });


        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password)
            
            
            const token = await userLogin.genrateAuthToken();   //This is the jwt token creation part and "gentateAuthToken" is a function, define in userSchema file foe token genration and and store in database 
                console.log(token);

                //Gentation of cokkies 
                res.cookie("jwtoken" , token ,{ //jwtoken is name of token
                    expires: new Date(Date.now() + 2589200000),
                    httpOnly: true
                });

            if (!isMatch) {
                return res.status(422).json({ message: "password not matched" });
            } else {
                return res.status(201).json({ message: "password matched" });
            }
        } else {
            return res.status(422).json({ message: "Invalid credential" });

        }


    } catch (err) {
        console.log(err);

    }


    // // console.log(userLogin.password);


    // //     User.findOne({email:email}).then((isExits)=>{
    // //       if(isExits){
    // //     return res.status(500).json({message: "Email found"});
    // // }else{
    // //     return res.status(201).json({message:"Email not found"})
    // // }
    // // }).catch((err)=>{console.log(err)});

});

module.exports = router;