const DisplayTodo = (props) => {
  const deletedTodoFromChild = (id) => {
    props.deletedTodoInParent(id); //lấy hàm từ lớp cha sang có key là deletedTodoInParent và truyền id vào để xóa
  };

  const listTodo = props.childData; //lay key:childData tu TodoList qua

  return (
    <div>
      <div>--------List todo: ---------------</div>
      {listTodo.map((item, index) => {
        return (
          <div
            id={item.id}
            key={item.id}
            onClick={() => deletedTodoFromChild(item.id)}
          >
            {item.name}
          </div> //thẻ div này là nơi hiển thị giá trị mới submit
        );
      })}
    </div>
  );
};
export default DisplayTodo;
