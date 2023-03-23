const express = require("express");
const router = express.Router();
const {  
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  CreateTask
} =  require("../controllers/tasks.js");

// あくまでこのファイルはルーティング設計のためのものなので処理はコントローラーに移行

router.get("/", getAllTasks);
router.post("/", CreateTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;