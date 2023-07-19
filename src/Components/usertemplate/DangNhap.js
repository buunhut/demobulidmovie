import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { thongTinDangNhap } from "../../redux/reduxSlice";
import { setLocal } from "../../redux/getDataFromAPI";

const DangNhap = ({ onCloseDrawer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // onSubmit: (values) => {
    //   //gửi dữ liệu lên API kiểm tra
    //   const res = axios({
    //     method: "post",
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //     data: values,
    //     headers: {
    //       TokenCybersoft:
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
    //     },
    //   })
    //     .then((res) => {
    //       const nguoiDung = res.data.content;
    //       //dispatch về cho redux
    //       dispatch(thongTinDangNhap(nguoiDung));
    //       //lưu local
    //       setLocal("nguoiDung", nguoiDung);

    //       //check maLoaiNguoiDung, nếu là nguoiDung.maLoaiNguoiDung thì trả về trang quanly, không thì trả về trang người dùng
    //       nguoiDung.maLoaiNguoiDung === "QuanTri"
    //         ? navigate("/quanly")
    //         : navigate("");
    //       // console.log(nguoiDung.maLoaiNguoiDung);

    //       formik.resetForm(); //reset form
    //       onCloseDrawer(); //đóng Drawer
    //     })
    //     .catch((err) => {
    //       alert("Lỗi đăng nhập");
    //     });
    // },
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
          values,
          {
            headers: {
              TokenCybersoft:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
            },
          }
        );

        const nguoiDung = res.data.content;
        dispatch(thongTinDangNhap(nguoiDung));
        setLocal("nguoiDung", nguoiDung);

        // Check maLoaiNguoiDung, if it's "QuanTri", navigate to "/quanly", otherwise navigate to the default route
        nguoiDung.maLoaiNguoiDung === "QuanTri"
          ? navigate("/quanly")
          : navigate("/");

        // No need to call formik.resetForm() as it's already done internally
        formik.resetForm();
        onCloseDrawer();
      } catch (error) {
        alert("Lỗi đăng nhập");
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values } = formik;
  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="taiKhoan"
              value={values.taiKhoan}
              name="taiKhoan"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="taiKhoan"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Tên đăng nhập
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="matKhau"
              name="matKhau"
              value={values.matKhau}
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="matKhau"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Mật khẩu
            </label>
          </div>
          <div>
            <button type="submit" className="myButton">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DangNhap;
