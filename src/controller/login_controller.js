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
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      pswd: req.body.pswd,
      role: req.body.role,
      age: req.body.age,
      gender: req.body.gender,
      mob_number: req.body.mob_number,
    });
    if (req.body.role === "student") {
      (user.classId = req.body.classId),
        (user.classSec = req.body.classSec),
        (user.roll_no = req.body.roll_no);
    }
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
    console.log(user);
    if (user == null) {
      const result = {
        status: 401,
        msg: "Username Password Invalid..!",
      };
      res.send(result);
      //res.send("Username password invalid..!");
    } else if (user.pswd === req.body.pswd) {
      const result = {
        status: 200,
        msg: "Successfully Logined..!",
        data: user,
      };
      res.send(result);
      // res.send("Successfully logined..!");
    } else {
      const result = {
        status: 401,
        msg: "Username password Invalid..!",
      };
      res.send(result);
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
