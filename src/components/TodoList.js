import React, { useState } from "react";
import _ from "lodash";

const TodoList = () => {
  //khai bao state
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo1", name: "watching youtube" },
    { id: "todo2", name: "Using youtube" },
    { id: "todo3", name: "Reading book" },
  ]);

  //Hàm tạo ra ID random
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //hàm Click submit: ấn vào là thêm giá trị mới nhập
  const handleClickBtn = () => {
    let todoId = randomIntFromInterval(4, 99999999999999); //gắn todoId=ID random ra ở hàm trên
    let todoItem = {
      id: `todo${todoId}`, //nối chuỗi Id cho giá trị mới nhập
      name: todo,
    };
    setListTodo([...listTodo, todoItem]); //...listTodo: copy lại 3 ptu cũ , todoItem cập nhật lại giá trị mới: !spread operator
  };

  //hàm khi click vào giá trị là nó sẽ xóa
  const handleDeletedTodo = (id) => {
    let currentTodoList = _.clone(listTodo); //coppy lại ptu cũ ở trên
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListTodo(currentTodoList);
  };

  return (
    <div>
      <label>Todo's Name</label>
      <input
        value={todo}
        type="text"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit" onClick={() => handleClickBtn()}>
        Submit
      </button>
      <br />
      <br />
      <div>--------List todo: ---------------</div>
      {listTodo.map((item, index) => {
        return (
          <div
            id={item.id}
            key={item.id}
            onClick={() => handleDeletedTodo(item.id)}
          >
            {item.name}
          </div> //thẻ div này là nơi hiển thị giá trị mới submit
        );
      })}
    </div>
  );
};
// class TodoList extends React.Component {
//   //khai bao state
//   state = {
//     name: "",
//     // channel: "Hoi dan it",
//   };
//   render() {
//     return (
//       <div>
//         <label>NAME</label>
//         <input
//           type="text"
//           onChange={(event) => this.setState({ name: event.target.value })}
//         />
//         <br />
//         Hello To do List name = {this.state.name}
//       </div>
//     );
//   }
// }
export default TodoList;
