const Todomodel= require('../Models/Todomodel');

module.exports.getToDo = async(req,res) => {
  const todo = await Todomodel.find()
  res.send(todo)
}

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body

  Todomodel
    .create({ text })
    .then((data) => {
      console.log("Add successfully...");
      console.log(data);
      res.send(data);
    })
  }
module.exports.updateToDo = async(req,res) => {
  const {_id ,text} = req.body
  Todomodel
  .findByIdAndUpdate(_id, {text})
  .then(() => res.send("Updated Successfully...."))
  .catch((err) => console.log(err));
}
module.exports.deleteToDo = async(req,res) => {
  const {_id} = req.body
  Todomodel
  .findByIdAndDelete(_id)
  .then(() => res.send("Deleted Successfully...."))
  .catch((err) => console.log(err));
}
