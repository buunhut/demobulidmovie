import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Tabs,
} from "antd";

import DangKy from "./DangKy";
import DangNhap from "./DangNhap";
import { useDispatch, useSelector } from "react-redux";
import { getLocal } from "../../redux/getDataFromAPI";
import { dangXuat, thongTinDangNhap } from "../../redux/reduxSlice";

const onChange = (key) => {};

const MyHeader = () => {
  const [openDangNhap, setOpenDangNhap] = useState(false);
  //mở form đăng nhập, bằng Drawer của antd
  const handleShowDangNhap = () => {
    setOpenDangNhap(true);
  };
  //close form đăng nhập, bằng Drawer của antd
  const handleCloseDangNhap = () => {
    setOpenDangNhap(false);
  };
  //trong Drawer chứa thẻ tab form đăng nhập và form đăng ký
  const items = [
    {
      key: "1",
      label: `Đăng nhập hệ thống`,
      children: <DangNhap onCloseDrawer={handleCloseDangNhap} />, //truyền onCloserDrawer đi, dùng để đóng Drawer khi xử lý thành công
    },
    {
      key: "2",
      label: `Đăng ký tài khoản`,
      children: <DangKy />,
    },
  ];
  const dispatch = useDispatch();

  //đăng xuất
  const handleDangXuat = () => {
    localStorage.removeItem("nguoiDung");
    dispatch(dangXuat());
  };

  useEffect(() => {
    const nguoiDung = getLocal("nguoiDung");
    nguoiDung !== null && dispatch(thongTinDangNhap(nguoiDung));
  }, []);

  const isLogin = useSelector((state) => state.duLieu.isLogin);
  const nguoiDung = useSelector((state) => state.duLieu.nguoiDung);
  const navigate = useNavigate();
  if (isLogin === true && nguoiDung.maLoaiNguoiDung === "QuanTri") {
    navigate("/quanly");
  }
  return (
    <div>
      <nav id="myHeader" className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CyberMovie
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#lichChieu"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Lịch Chiếu
                </a>
              </li>
              <li>
                <a
                  href="#cumRap"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cụm Rạp
                </a>
              </li>
              <li>
                <a
                  href="#tinTuc"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tin Tức
                </a>
              </li>
              <li>
                <a
                  href="#ungDung"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Ứng Dụng
                </a>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  {isLogin && nguoiDung.maLoaiNguoiDung === "KhachHang" ? (
                    <NavLink onClick={handleDangXuat}>
                      Đăng Xuất
                      <img src="picsum" alt="" />
                    </NavLink>
                  ) : (
                    <NavLink onClick={handleShowDangNhap}>Đăng Nhập</NavLink>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <>
        <Drawer
          title={
            <a href="#" className="flex items-center float-right">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                CyberMovie
              </span>
            </a>
          }
          width={410}
          onClose={handleCloseDangNhap}
          open={openDangNhap}
          bodyStyle={{
            paddingBottom: 80,
          }}
        >
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Drawer>
      </>
    </div>
  );
};

export default MyHeader;
