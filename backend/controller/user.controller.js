const { User } = require("../model/user.model");

const register = async (req, res) => {
  try {
    const { username, profile_picture } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const newUser = new User({
      username,
      profile_picture,
    });

    let d = await newUser.save();
    return res.send(d);
    // return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  register
};
