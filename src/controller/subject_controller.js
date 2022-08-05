const Subject = require("../model/subject");

const subList = async (req, res) => {
  try {
    const sub = await Subject.find();
    res.json(sub);
  } catch (err) {
    res.send("Error");
  }
};

const addSub = async (req, res) => {
  const checkSub = await Subject.findOne({ className: req.body.subName });
  if (!checkSub) {
    const sub = new Subject({
      classId: req.body.classId,
      subName: req.body.subName,
      subTeacher: req.body.subTeacher,
    });
    try {
      const s1 = await sub.save();
      const result = {
        status: 200,
        data: s1,
        msg: "Successfully Added.!",
      };
      res.send(result);
    } catch (err) {
      res.send("Error");
    }
  } else {
    res.send(
      "Subject with" + " '" + req.body.subName + "' " + "name already exist"
    );
  }
};

const editSub = async (req, res) => {
  try {
    const sub = await Subject.findById(req.params.id);
    if (req.body.subName) {
      sub.className = req.body.subName;
    }
    if (req.body.classId) {
      sub.classId = req.body.classId;
    }
    if (req.body.subTeacher) {
      sub.subTeacher = req.body.subTeacher;
    }
    const s1 = await sub.save();
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
const deletSub = async (req, res) => {
  try {
    const sub = await Subject.findById(req.params.id);
    const s1 = await sub.remove();
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

const subListById = async (req, res) => {
  try {
    const query = { classId: req.params.id };
    const opt = { projection: { subName: 0 } };
    const sub = await Subject.find(query, { subName: 1, _id: 0 });
    console.log(sub);
    res.send(sub);
  } catch (err) {}
};

module.exports = {
  subList,
  addSub,
  editSub,
  deletSub,
  subListById,
};
