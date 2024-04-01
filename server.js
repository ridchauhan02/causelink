const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require('bcrypt');
const multer = require('multer');
const storage = multer.memoryStorage(); // to store files in memory
const upload = multer({ storage: storage });
const port = 3001;

const app = express()


app.use(cors())
app.use(express.json())

//here the login database start
const LoginSchema = new mongoose.Schema({
    
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  // Create User model
  const Login = mongoose.model('Login', LoginSchema);

  //here the username database start
  
  const UsernameSchema = new mongoose.Schema({
    
    username: {
      type: String,
      required: true,
      unique: true
    }
  });
  // Create User model
  const Username = mongoose.model('Username', UsernameSchema);

  //here the organization name database start
  
  const OrganizationnameSchema = new mongoose.Schema({
    
    organizationname: {
      type: String,
      required: true,
      unique: true
    }

  });
  // Create User model
const Organizationname = mongoose.model('Organizationname', OrganizationnameSchema);



//here the  details database start
  
const DetailsSchema = new mongoose.Schema({
    
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  about: {
    type: String,
    required: true,
    unique: true
  },
  file: {
    type: Buffer,
    required: true,
    unique: true
  }
});
// Create User model
const  Details = mongoose.model('Details', DetailsSchema);


// here the new post database start
const newpostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true, unique: true },
  commitment: { type: String, required: true },
  inpersonorremote: { type: String, required: true },
  address: { type: String, required: true },
  duration: { type: String, required: true },
  frequency: { type: String, required: true },
  mode: { type: String, required: true },
  note: { type: String, required: true },





}, { timestamps: true });


const User = mongoose.model('newPost', newpostSchema);


const uri = "mongodb+srv://riddhi:E5KuIVo9Je7Vsgaw@cluster0.ke85lgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the email is already registered
      const existingUser = await Login.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Create a new user instance
      const newUser = new Login({
        email,
        password, // Hash the password before saving it to the database
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Respond with success message
      res.status(201).json({ message: 'User Login successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/username', async (req, res) => {
  try {
    const { username } = req.body;

    // Check if the email is already registered
    const existingUser = await Username.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user instance
    const newUser = new Username({
      username // Hash the password before saving it to the database
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'Username Added successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/registerthree', async (req, res) => {
  try {
    const { organizationname } = req.body;

    // Check if the email is already registered
    const existingUser = await Organizationname.findOne({ organizationname });

    if (existingUser) {
      return res.status(400).json({ message: 'organization Name already exists' });
    }

    // Create a new user instance
    const newUser = new Organizationname({
      organizationname // Hash the password before saving it to the database
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(200).json({ message: 'Organization name Added successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/registerfive', upload.single('file'), async (req, res) => {
  try {
    const { email, phone, address, about } = req.body;
    const file = req.file ? req.file.buffer : null;

    // Validate if file exists
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Check if the email or phone is already registered
    const existingUserByEmail = await Details.findOne({ email });
    const existingUserByPhone = await Details.findOne({ phone });

    if (existingUserByEmail || existingUserByPhone) {
      return res.status(400).json({ message: 'Email or phone number already exists' });
    }

    // Create a new user instance
    const newUser = new Details({
      email,
      phone,
      address,
      about,
      file // file is now a Buffer
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(200).json({ message: 'Details Added successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.get('/api/users', (req, res) => {
  User.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  User.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// app.post('/api/users', (req, res) => {
//   const newUser = new User(req.body);
//   console.log(newUser);
//   newUser.save().then(item => {
//     console.log(item);
//     res.status(201).json({ message: 'Item added successfully' });
//   })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: 'Server error' });
//     });
// });

app.post('/api/users', async (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(item => {
      res.status(201).json({ message: 'Item added successfully' });
    })
    .catch(err => {
      console.error(err); // This will log the specific error to the console
      res.status(500).json({ message: 'Server error', error: err.message }); // Consider sending back the error message for debugging
    });
});


app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
    console.log(item);
    res.status(203).json({ message: 'Item Fetched Successfully', data:item });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});


app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully', user });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// app.delete('/api/users/:id',async (req, res) => {
//   const { id } = req.params;
//   User.findByIdAndRemove(id)
//   .then(item => {
//     console.log(item);
//     res.status(203).json({ message: 'Item Fetched Successfully', data:item });
//   })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: 'Server error' });
//     });
// });

// app.delete('/api/users/:id', async (req, res) => {
//   const { id } = req.params;
//   console.log("Attempting to delete user with ID:", id); // Add this line to debug
//   try {
//     const user = await User.findByIdAndRemove(id);

//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error.toString());
//   }
// });




// app.post('/registerfive', async (req, res) => {
//   try {
//     const { email, phone ,address , about , file } = req.body;

//     // Check if the email is already registered
//     const existingUser = await Details.findOne({ phone });

//     if (existingUser) {
//       return res.status(400).json({ message: 'phone number already exists' });
//     }

//     // Create a new user instance
//     const newUser = new Details({
//       email,
//       phone,
//       address,
//       about,
//       file// Hash the password before saving it to the database
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Respond with success message
//     res.status(200).json({ message: 'Details Added successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.post('/login', async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       // Find the user by email
//       const user = await User.findOne({ email });
  

//       // If user not found or password doesn't match, return error
//     //   if (!user || !(await bcrypt.compare(password, user.password))) {
//     //     return res.status(401).json({ message: 'Invalid email or password' });
//     //   }
  
//       // If email and password match, return success message
//       res.status(200).json({ message: 'Success',name: user.name });
//     } catch (error) {
//       console.error('Error logging in user:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Now you can define models and perform database operations using Mongoose
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
    console.log(`server is running ${port}`);
});