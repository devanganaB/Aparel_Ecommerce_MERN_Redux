const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require('stripe');
const bcrypt = require('bcryptjs');
// const authenticate =  require("../middleware/authenticate");
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
// app.use(cookieParser()); // Use cookie-parser middleware

const PORT = process.env.PORT || 3005;

// // Configure express-session middleware
// app.use(
//   session({
//     secret: "your-secret-key", // Change this to a secure secret key
//     resave: false,
//     saveUninitialized: true,
//   })
// );


//mongodb connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log(err);
});

//schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
  },
  lastName: {
    type: String,
    unique: true,
  }, 
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },
  confirmPassword: {
    type: String,
    unique: true,
  },
  // tokens:[
  //   {
  //     token:{
  //     type: String,
  //     unique: true,
  //     }
  //   }
  // ],
  image: String,
});

const userModel = mongoose.model("user", userSchema);

//sign up
app.post("/signup", async (req, res) => {
  const { email } = req.body;
  try {
    const userExists = await userModel.findOne({ email: email });
    if (userExists) {
      res.json({ message: "Email id is already registered", alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();

      // // Store user data in the session
      // req.session.user = newUser;

      // // Store user information in the session
      // req.session.user = {
      //   _id: newUser._id,
      //   firstName: newUser.firstName,
      //   lastName: newUser.lastName,
      //   email: newUser.email,
      //   image: newUser.image,
      // };

      res.json({ message: "Successfully signed up", alert: true });
    }
  } catch (error) {
    res.status(500).json({ message: "Error during signup", alert: false });
  }
});


//api login
app.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
    // let token;
    const user = await userModel.findOne({ email: email });
    if (user) {

      //TOKEN!!!!
      // token = await user.generateAuthToken();
      // console.log(token);

      // res.cookie("jwtoken", token, {
      //   expires: new Date(Date.now()+25892000000),
      //   httpOnly: true
      // });

      // // Store user data in the session
      // req.session.user = user;


      // // Store user information in the session
      // req.session.user = {
      //   _id: newUser._id,
      //   firstName: newUser.firstName,
      //   lastName: newUser.lastName,
      //   email: newUser.email,
      //   image: newUser.image,
      // };

      const dataSend = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      };
      res.json({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.json({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error during login", alert: false });
  }
});

// // generating tokenn
// userSchema.methods.generateAuthToken =  async function() {
//   try{
//       let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
//       this.tokens = this.tokens.concat({token:token});
//       await this.save();
//       return token;
//   }catch{
//     console.log(err);
//   }

// }



// product schema and model here

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

const productModel = mongoose.model("product", schemaProduct);

app.post("/uploadProduct", async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res.json({ message: "Upload successful" });
  } catch (error) {
    res.status(500).json({ message: "Error during product upload" });
  }
});

app.get("/product", async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Define your Stripe integration here

// ...

app.listen(PORT, () => {
  console.log("Server is running at port: " + PORT);
});
