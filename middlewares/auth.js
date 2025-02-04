import jwt from "jsonwebtoken";
import getParameter from "../config/aws-creds.js";
const userAuth = async (req, res, next) => {
  const JWT_SECRET =
    (await getParameter("AI_IMAGE_JWT_SECRET")) || process.env.JWT_SECRET;
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const tokenDecode = jwt.verify(token, JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({ success: false, message: "Authrized. Login Again" });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
export default userAuth;
