import { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const [isShowDetail, setIsShowDetail] = useState(true);

  const handleClickBtn = () => {
    //key giống tên biến nên viết thế này kh thì name1:name,...
    let object = {
      name,
      price,
      size,
      color,
    };
    // console.log("check data json", object, JSON.stringify(object));

    let productList = localStorage.getItem("productList");
    if (productList) {
      let arr = JSON.parse(productList);
      arr.push(object);
      localStorage.setItem("productList", JSON.stringify(arr));
    } else {
      localStorage.setItem("productList", JSON.stringify([object]));
    }

    //add la clear input va chay lai ham return
    setName("");
    setPrice(0);
    setSize(0);
    setColor("");
  };

  //hiện <=> ẩn
  const handleHideShow = (status) => {
    setIsShowDetail(status); //show form
  };

  localStorage.setItem("name", "Eric");
  const name1 = localStorage.getItem("name");
  console.log("check name =", name1);

  return (
    <div>
      {isShowDetail === true && (
        <fieldset>
          <legend>add new product</legend>
          <div className="input-product">
            <label>Name:</label>
            <input
              value={name}
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="input-product">
            <label>Price:</label>
            <input
              value={price}
              type="text"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <div className="input-product">
            <label>Size:</label>
            <input
              value={size}
              type="text"
              onChange={(event) => setSize(event.target.value)}
            />
          </div>

          <div className="input-product">
            <label>Color:</label>
            <input
              value={color}
              type="text"
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <div>
            <button onClick={() => handleClickBtn()}>Add new</button>
          </div>
        </fieldset>
      )}

      {isShowDetail === true ? (
        <div onClick={() => handleHideShow(false)}>Hide this form</div>
      ) : (
        <div onClick={() => handleHideShow(true)}>Show form</div>
      )}

      <div>
        List product:
        <div>{localStorage.getItem("productList")}</div>
      </div>
    </div>
  );
};

export default AddNewProduct;
