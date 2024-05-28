const jwt = require("jsonwebtoken");
const db = require("../db/client");
const findUserWithToken = async (token) => {
  let email;
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    email = payload.email;
    console.log("payload is:", payload);
  } catch (error) {
    console.error("Error verifying JWT:", error);
    throw new Error("Not authorized");
  }
  try {
    const res = await db.query(
      "SELECT user_id, email, name, role FROM users WHERE email = $1",
      [email]
    );
    if (res.rows.length === 0) {
      const error = new Error("Not Authorized");
      error.status = 401;
      throw error;
    }
    const user = res.rows[0];
    return user;
  } catch (dbError) {
    console.error("Database query error:", dbError);
    throw new Error("User not found");
  }
};
const isLoggedIn = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const token = auth?.startsWith("Bearer ")? auth.slice(7) : null;
        req.user = await findUserWithToken(token);
        next();
    } catch(error) {
        next(error);
    }
}
const isAdmin = async (req, res, next) => {
     try {
          const auth = req.headers.authorization;
          const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
          req.user = await findUserWithToken(token);
          if (req.user.role !== 'admin') {
            res.status(401).json({ message: "Not an admin" });
          } else {
            next()
          }
     } catch (error) {
          next(error);
     }
};
module.exports = {isLoggedIn, isAdmin};
