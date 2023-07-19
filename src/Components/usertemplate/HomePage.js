import React, { useEffect } from "react";
import {
  getBanner,
  getDanhSachNguoiDung,
  getDanhSachPhim,
  getThongTinHeThongRap,
} from "../../redux/getDataFromAPI";
import { useDispatch, useSelector } from "react-redux";
import MyHeader from "./MyHeader";
import MyBanner from "./MyBanner";
import CumRap from "./CumRap";
import TinTuc from "./TinTuc";
import UngDung from "./UngDung";
import LichChieu from "./LichChieu";

const HomePage = () => {
  const duLieu = useSelector((state) => state.duLieu);
  // console.log(duLieu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanner());
    dispatch(getDanhSachPhim());
    dispatch(getDanhSachNguoiDung());
    dispatch(getThongTinHeThongRap());
  }, []);

  return (
    <>
      <MyHeader />
      <MyBanner />
      <LichChieu />
      <CumRap />
      <TinTuc />
      <UngDung />
    </>
  );
};

export default HomePage;
