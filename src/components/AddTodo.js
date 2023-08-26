const AddTodo = (props) => {
  const { todo, setTodo, handleClickBtn } = props; // truyền nhanh prop. các key ở lớp cha(home) sang
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
    </div>
  );
};
export default AddTodo;
