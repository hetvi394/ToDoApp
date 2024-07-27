import axios from 'axios';

  const baseUrl = "http://localhost:5000/";
const getAllToDo = (setToDo) => {
  axios.get(baseUrl)
  .then(({data}) => {
    console.log("data ---> ", data);
    setToDo(data);
  })
}
const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}save`, { text })
    .then(({ data }) => {
      console.log("Added todo ---> ", data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));

};
const updateTodo = (toDoId , text , setToDo, setText, setIsupdating) => {
  axios.post(`${baseUrl}update`, {_id: toDoId, text })
    .then((data) => {
      console.log("Updated todo ---> ", data);
      setText("");
      setIsupdating(false)
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios.post(`${baseUrl}delete`, {_id })
    .then((data) => {
      console.log("Deleted todo ---> ", data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
export { getAllToDo, addToDo, updateTodo, deleteToDo};
