const modelClass = require("../model/class");

const classList = async (req, res) => {
  try {
    const cls = await modelClass.find();
    res.json(cls);
  } catch (err) {
    res.send("Error");
  }
};

const addClass = async (req, res) => {
  const checkCls = await modelClass.findOne({ classId: req.body.classId });
  if (!checkCls) {
    const cls = new modelClass({
      classId: req.body.classId,
      classSec: req.body.classSec,
      classTeacher: req.body.classTeacher,
    });
    try {
      const s1 = await cls.save();
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
      "Class with" + " '" + req.body.classId + "' " + "name already exist"
    );
  }
};

const editClass = async (req, res) => {
  try {
    const cls = await modelClass.findById(req.params.id);
    if (req.body.classSec) {
      cls.classSec = req.body.classSec;
    }
    if (req.body.classId) {
      cls.classId = req.body.classId;
    }
    if (req.body.classTeacher) {
      cls.classTeacher = req.body.classTeacher;
    }
    const s1 = await cls.save();
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
const deletClass = async (req, res) => {
  try {
    const sub = await modelClass.findById(req.params.id);
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

module.exports = {
  classList,
  addClass,
  editClass,
  deletClass,
};
