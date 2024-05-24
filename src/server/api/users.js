const express = require("express");
const usersRouter = express.Router();

const { createUser, getAllUsers, getUser, getUserByEmail } = require("../db");

const {isLoggedIn} = require("../api/authmid");

const jwt = require("jsonwebtoken");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();

    res.send({
      users,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both an email and password",
    });
  }
  try {
    const user = await getUser({ email, password });
    if (user) {
      const token = jwt.sign(
        {
          id: user.id,
          email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1w",
        }
      );
      console.log("logged in user is,", user);
      res.send({
        message: "Login successful!",
        token,
        user_id: JSON.stringify(user.user_id), //reference this from local storage
      });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch (err) {
    next(err);
  }
});

usersRouter.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const _user = await getUserByEmail(email);

    if (_user) {
      next({
        name: "UserExistsError",
        message: "A user with that email already exists",
      });
    }

    const user = await createUser({
      name,
      email,
      password,
    });

    const token = jwt.sign(
      {
        id: user.id,
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1w",
      }
    );

    res.send({
      message: "Sign up successful!",
      token,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/me", isLoggedIn, async (req, res, next) => {
  try {
    console.log(req.user);
    res.send({
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;

// // Middleware function to verify JWT token
// function verifyToken(req, res, next) {
//   const token = req.headers['authorization'];
//   console.log(token);
//   if (!token) {
//     return res.status(401).json({ error: 'Token not provided' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: 'Invalid token' });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// }

// // Route to get logged-in user's information
// usersRouter.get('/me', verifyToken, async (req, res, next) => {
//   try {
//     const userId = req.userId;
//     const user = await getUserById(userId); // Assuming you have a function to get user by ID
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
