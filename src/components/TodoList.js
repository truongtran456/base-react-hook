import React, { useState } from "react";

const TodoList = () => {
  //khai bao state
  const [name, setName] = useState("");

  //khởi tạo click
  const handleClickBtn = (event, msg) => {
    console.log(">>>run :", msg); //in ra run: button click
  };
  return (
    <div>
      <label>Name</label>
      <input
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <button
        type="button"
        onClick={(event) => {
          handleClickBtn(event, "button click ");
        }}
      >
        Submit
      </button>
      <br />
      <br />
      Hello To do List name ={name}
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
