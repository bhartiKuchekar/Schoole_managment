const Student = require("../model/student");

const studentList = async (req, res) => {
  try {
    const student = await Student.find();
    res.json(student);
  } catch (err) {
    res.send("Error", +err);
  }
};

const addStudent = async (req, res) => {
  const student = new Student({
    name: req.body.name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    classId: req.body.classId,
    classSec: req.body.classSec,
    roll_no: req.body.roll_no,
    age: req.body.age,
    gender: req.body.gender,
    enroll_no: req.body.enroll_no,
    address: req.body.address,
  });
  try {
    const stud = await student.save();
    // console.log(stud);
    const result = {
      status: 201,
      data: stud,
      msg: "Created!",
    };
    res.send(result);
  } catch (err) {
    res.send("Error", err);
  }
};

const editStudent = async (req, res) => {
  try {
    // console.log(req.params.id);
    const stud = await Student.findById(req.params.id);
    // console.log(stud);
    if (req.body.name) {
      stud.name = req.body.name;
    }
    if (req.body.middle_name) {
      stud.middle_name = req.body.middle_name;
    }
    if (req.body.last_name) {
      stud.last_name = req.body.last_name;
    }
    if (req.body.classId) {
      stud.classId = req.body.classId;
    }
    if (req.body.classSec) {
      stud.classSec = req.body.classSec;
    }
    if (req.body.roll_no) {
      stud.roll_no = req.body.roll_no;
    }
    if (req.body.age) {
      stud.age = req.body.age;
    }
    if (req.body.gender) {
      stud.gender = req.body.gender;
    }
    if (req.body.enroll_no) {
      stud.enroll_no = req.body.enroll_no;
    }
    if (req.body.address) {
      stud.address = req.body.address;
    }
    const s1 = await stud.save();
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

const deletStudent = async (req, res) => {
  try {
    const stud = await Student.findById(req.params.id);
    const s1 = await stud.remove();
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
  studentList,
  addStudent,
  editStudent,
  deletStudent,
};
