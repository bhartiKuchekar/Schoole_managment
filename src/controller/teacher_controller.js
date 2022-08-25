const Teacher = require("../model/teacher");

const teacherList = async (req, res) => {
  try {
    const teacher = await Teacher.find();
    res.json(teacher);
  } catch (err) {
    res.send("Error");
  }
};

const addTeacher = async (req, res) => {
  const teacher = new Teacher({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    sub: req.body.sub,
    class: req.body.class,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
    address: req.body.address,
  });
  try {
    const temp = await teacher.save();
    // console.log(stud);
    const result = {
      status: 201,
      data: temp,
      msg: "Created!",
    };
    res.send(result);
  } catch (err) {
    res.send("Error", err);
  }
};

const editTeacher = async (req, res) => {
  try {
    // console.log(req.params.id);
    const temp = await Teacher.findById(req.params.id);
    // console.log(stud);
    if (req.body.first_name) {
      temp.first_name = req.body.first_name;
    }
    if (req.body.last_name) {
      temp.last_name = req.body.last_name;
    }
    if (req.body.sub) {
      temp.sub = req.body.sub;
    }
    if (req.body.class) {
      temp.class = req.body.class;
    }
    if (req.body.age) {
      temp.age = req.body.age;
    }
    if (req.body.gender) {
      temp.gender = req.body.gender;
    }
    if (req.body.email) {
      temp.email = req.body.email;
    }
    if (req.body.address) {
      temp.address = req.body.address;
    }
    const s1 = await temp.save();
    const result = {
      status: 200,
      data: s1,
      msg: "Updated!",
    };
    res.send(result);
  } catch (err) {
    res.send("Error");
  }
};

const deletTeacher = async (req, res) => {
  try {
    const temp = await Teacher.findById(req.params.id);
    const s1 = await temp.remove();
    const result = {
      status: 200,
      data: s1,
      msg: "Deleted!",
    };
    res.send(result);
  } catch (err) {
    res.send("Error");
  }
};

module.exports = {
  teacherList,
  addTeacher,
  editTeacher,
  deletTeacher,
};
