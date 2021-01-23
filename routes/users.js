const router = require("express").Router();
const user = require("../models/curd_model");
// get data
router.get("/", async (req, res) => {
  try {
    const data = await user.find();
    res.json(data);
  } catch (error) {
    res.status(400).json("Error:" + error.message);
  }
});

// create data in database
router.post("/add", async (req, res) => {
  const { title, description, target_date, status } = req.body;
  try {
    const newData = await user.create({
      title,
      description,
      target_date,
      status,
    });
    res.json("data added!");
  } catch (error) {
    res.status(400).json("Error:" + error);
  }
});

// get the data by title
router.get("/:title", async (req, res) => {
  try {
    const data = await user.findOne({ title: req.params.title });
    res.json(data);
  } catch (error) {
    res.status(400).json("Error:" + error.message);
  }
});

// delete the data by id
router.delete("/:id", async (req, res) => {
  try {
    const data = await user.findByIdAndDelete(req.params.id);
    res.json("data Deleted.");
  } catch (error) {
    res.status(400).json("Error:" + error.message);
  }
});

// Update data of user by id
router.patch("/update/:id", async (req, res) => {
  try {
    const data = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
