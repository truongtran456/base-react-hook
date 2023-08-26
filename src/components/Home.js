import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {
  //khai bao state
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo1", name: "watching youtube" },
    { id: "todo2", name: "Using youtube" },
    { id: "todo3", name: "Reading book" },
  ]);

  //Hàm tạo ra ID random cho gía trị mới thêm ở input
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //hàm Click submit: ấn vào là thêm giá trị mới nhập
  const handleClickBtn = () => {
    //neu rong ma submit thi alert
    if (!todo) {
      alert("Todo is name not empty");
      return;
    }
    let todoId = randomIntFromInterval(4, 99999999999999); //gắn todoId=ID random ra ở hàm trên
    let todoItem = {
      id: `todo${todoId}`, //nối chuỗi Id cho giá trị mới nhập
      name: todo,
    };
    setListTodo([...listTodo, todoItem]); //...listTodo: copy lại 3 ptu cũ , todoItem cập nhật lại giá trị mới: !spread operator
    setTodo(""); //sau khi them thi input=rong
  };

  //hàm khi click vào giá trị là nó sẽ xóa
  const handleDeletedTodo = (id) => {
    let currentTodoList = _.clone(listTodo); //coppy lại ptu cũ ở trên
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListTodo(currentTodoList);
  };

  const myInfor = { age: 10, name: "truong" };
  //prop,state:object (key:value)
  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} handleClickBtn={handleClickBtn} />

      <DisplayTodo
        childData={listTodo} //x=y => x <-y Tao key=Data
        name={"Eric"}
        myInfor={myInfor}
        deletedTodoInParent={handleDeletedTodo} //tạo key deletedTodoInParent = hàm xóa để truyền qua lớp con
      />
    </div>
  );
};
// class Home extends React.Component {
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
export default Home;
