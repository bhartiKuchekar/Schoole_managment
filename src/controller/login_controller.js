const Login = require("../model/login");

const all_registered_user = async (req, res) => {
  try {
    const list = await Login.find();
    res.json(list);
  } catch (err) {
    res.send("Error");
  }
};

const register = async (req, res) => {
  const checkUser = await Login.findOne({ userName: req.body.userName });
  if (!checkUser) {
    const user = new Login({
      userName: req.body.userName,
      pswd: req.body.pswd,
      role: req.body.role,
    });
    try {
      const u1 = await user.save();
      const result = {
        status: 200,
        data: u1,
        msg: "Successfully Registered.!",
      };
      res.send(result);
    } catch (err) {
      res.send("Error");
    }
  } else {
    res.send(
      "User with" + " '" + req.body.userName + "' " + "username already exist"
    );
  }
};
const login = async (req, res) => {
  try {
    const user = await Login.findOne({ userName: req.body.userName });
    //console.log(user);
    if (user == null) {
      res.send("User does't exist..!");
    } else if (user.pswd === req.body.pswd) {
      res.send("Successfully logined..!");
    } else {
      res.send("Username password invalid..!");
    }
    res.send(user);
  } catch (err) {
    res.send("Error");
  }
};

module.exports = {
  login,
  register,
  all_registered_user,
};
