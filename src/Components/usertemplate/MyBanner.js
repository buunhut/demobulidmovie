import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

const MyBanner = () => {
  const myBanner = useSelector((state) => state.duLieu.banner);
  return (
    <div>
      <Carousel autoplay effect={"fade"}>
        {myBanner.map((item, index) => {
          return (
            <div key={index}>
              <img style={contentStyle} src={item.hinhAnh} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyBanner;
