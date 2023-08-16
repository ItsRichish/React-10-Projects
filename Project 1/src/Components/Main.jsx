import React from "react";

const Main = () => {
  return (
    <main className="container">
      <div className="first">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your Feet Deserve The Best And We Are Here To Provide You With The
          Best With Our Footwears. Your Feet Deserve The Best And We Are Here To
          Provide You With The Best With Our Footwears.
        </p>
        <div className="btn">
          <button>Shop Now</button>
          <button className="dark-btn">Category</button>
        </div>

        <div className="sponser">
          <p>Also Available on</p>
          <div className="sponser-img">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
          </div>
        </div>
      </div>

      <div className="second">
        <div className="image">
          <img src="/images/shoe.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Main;
