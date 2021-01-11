import { useEffect, useRef, useState } from "react";
// import "./App.css";
// import img1 from "/img1.jpg";

const ProductDetails = () => {
  const myRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [state, setState] = useState({
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "/img/img1.jpg",
          "/img/img2.jpg",
          "/img/img3.jpg",
          "/img/img4.jpg",
          "/img/img5.jpg",
        ],
        count: 1,
      },
    ],
    index: 0,
  });

  return (
    <div className="App">
      {state.products.map((item) => (
        <div className="details" key={item._id}>
          <a
            href={item.src[activeIndex]}
            className="MagicZoom"
            data-options="selectorTrigger: hover; transitionEffect: false;"
            id="andr"
          >
            <div className="big-img">
              <img src={item.src[activeIndex]} alt="" />
            </div>
          </a>
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <div className="colors">
              {item.colors.map((color, indx) => (
                <button style={{ background: color }} key={indx}></button>
              ))}
            </div>
            <p>{item.description}</p>
            <p>{item.content}</p>
            <div className="thumb" ref={myRef}>
              {item.src.map((img, indx) => (
                <a data-zoom-id="andr" href={img} data-image={img} title="...">
                  <img
                    src={img}
                    alt="img"
                    key={indx}
                    // onClick={() => handleTab(indx)}
                    // onMouseOver={() => handleTab(indx)}
                  />
                </a>
              ))}
            </div>
            <button className="cart">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
