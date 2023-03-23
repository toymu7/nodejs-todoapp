const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "タスク名をいれてください"],
    trim: true,
    maxlength: [20, "タスク名を20文字以内で入力して下さい"]
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);