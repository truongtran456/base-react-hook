/* eslint-disable jsx-a11y/alt-text */
import "./Product.scss";
import sniker1 from "../../assets/images/sniker1.jpg";
import sniker2 from "../../assets/images/sniker2.jpg";
import sniker3 from "../../assets/images/sniker3.jpg";
import sniker4 from "../../assets/images/sniker4.jpg";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

const images = [sniker1, sniker2, sniker3, sniker4];

const Product = () => {
  const [currentUpImg, setCurrentUpImg] = useState(sniker1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickPreviewImg = () => {
    let index = images.findIndex((item) => item === currentUpImg);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img src={currentUpImg} onClick={() => setIsOpen(true)} />
          </div>
          <div className="img-down">
            <div className="img-small">
              <img
                src={sniker1}
                onClick={() => setCurrentUpImg(sniker1)}
                className={currentUpImg === sniker1 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sniker2}
                onClick={() => setCurrentUpImg(sniker2)}
                className={currentUpImg === sniker2 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sniker3}
                onClick={() => setCurrentUpImg(sniker3)}
                className={currentUpImg === sniker3 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              <img
                src={sniker4}
                onClick={() => setCurrentUpImg(sniker4)}
                className={currentUpImg === sniker4 ? "active" : ""}
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">Giày chạy bộ nam New Balance - MB8534</div>
          <div className="price">3.690.000 đ</div>
          <div className="size">Size: 30</div>
          <div className="action">
            <label className="label">Số lượng</label>
            <input type="number" min={1} value={1} className="quantity" />
            <button className="buy">Chọn mua</button>
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          // animationDisabled={true} //khoong nhay hinh`
          animationDuration={500} //khoan thoi gian xay ra
        />
      )}
    </div>
  );
};

export default Product;
