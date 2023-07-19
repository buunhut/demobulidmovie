import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const DangKy = () => {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      xacNhanMatKhau: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "gp00",
    },

    onSubmit: (values) => {
      // console.log(values);
      // gửi dữ liệu lên API kiểm tra
      const res = axios({
        method: "post",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: values,
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
        },
      })
        .then((res) => {
          formik.resetForm();
          //code thành công quay về tab đăng nhập
        })
        .catch((err) => {
          alert("Lỗi,đăng ký không thành công");
        });
    },
  });
  const { handleSubmit, handleChange, handleBlur, values } = formik;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="taiKhoan"
            name="taiKhoan"
            value={values.taiKhoan}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
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
            type="text"
            id="matKhau"
            name="matKhau"
            value={values.matKhau}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="matKhau"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Mật khẩu
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="xacNhanMatKhau"
            name="xacNhanMatKhau"
            value={values.xacNhanMatKhau}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="xacNhanMatKhau"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Xác nhận mật khẩu
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="hoTen"
            name="hoTen"
            value={values.hoTen}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="hoTen"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Họ tên người dùng
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Địa chỉ Email
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="soDt"
            name="soDt"
            value={values.soDt}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="soDt"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Số điện thoại
          </label>
        </div>
        <div>
          <button className="myButton">Đăng ký tài khoản</button>
        </div>
      </form>
    </div>
  );
};

export default DangKy;
