import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { thongTinDangNhap } from "./reduxSlice";
//gọi dữ liệu bất đồng bộ banner
export const getBanner = createAsyncThunk("duLieu/getBanner", async () => {
  const res = await axios({
    method: "get",
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
    headers: {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
    },
  });
  return res.data.content;
});

//gọi dữ liệu bất đồng bộ danh sách phim
export const getDanhSachPhim = createAsyncThunk(
  "duLieu/getDanhSachPhim",
  async () => {
    const res = await axios({
      method: "get",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
      },
    });
    return res.data.content;
  }
);
//gọi dữ liệu bất đồng bộ danh sách người dùng
export const getDanhSachNguoiDung = createAsyncThunk(
  "duLieu/getDanhSachNguoiDung",
  async () => {
    const res = await axios({
      method: "get",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
      },
    });
    return res.data.content;
  }
);

//gọi dữ liệu bất đồng bộ thông tin hệ thống rạp
export const getThongTinHeThongRap = createAsyncThunk(
  "duLieu/getThongTinHeThongRap",
  async () => {
    const res = await axios({
      method: "get",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
      },
    });
    return res.data.content;
  }
);

//chức năng xóa
export const xoaNguoiDung = (taiKhoan) => {
  axios({
    method: "delete",
    url: `https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
    headers: {
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYW50aG9ueTE0MTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhbnRob255bmd1eWVuMTQxMkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImFudGhvbnluZ3V5ZW4xNDEyQGdtYWlsLmNvbSIsIkdQMDkiXSwibmJmIjoxNjg5NjA2ODUwLCJleHAiOjE2ODk2MTA0NTB9.7pdyaZienWr6ZrSFolPa-MCn5CXbGGdb2wxbF4_DBwQ ",
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
    },
  });
};

//lưu dữ liệu vào local về
export const setLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
