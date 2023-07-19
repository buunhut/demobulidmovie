import { createSlice } from "@reduxjs/toolkit";
import {
  getBanner,
  getDanhSachNguoiDung,
  getDanhSachPhim,
  getThongTinCumRapTheoHeThong,
  getThongTinHeThongRap,
} from "./getDataFromAPI";
const initialState = {
  banner: [],
  danhSachPhim: [],
  danhSachNguoiDung: [],
  thongTinHeThongRap: [],
  isLogin: false,
  nguoiDung: {},
};

export const reduxSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    //dispatch về
    thongTinDangNhap: (state, action) => {
      state.nguoiDung = action.payload;
      state.isLogin = true;
    },
    //dispatch về
    dangXuat: (state) => {
      state.nguoiDung = {};
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.banner = action.payload;
    });
    builder.addCase(getDanhSachPhim.fulfilled, (state, action) => {
      state.danhSachPhim = action.payload;
    });
    builder.addCase(getDanhSachNguoiDung.fulfilled, (state, action) => {
      state.danhSachNguoiDung = action.payload;
    });
    builder.addCase(getThongTinHeThongRap.fulfilled, (state, action) => {
      state.thongTinHeThongRap = action.payload;
    });
    // builder.addCase(getThongTinCumRapTheoHeThong.fulfilled, (state, action) => {
    //   state.thongTinCumRapTheoHeThong = action.payload;
    // });
  },
});
export const { thongTinDangNhap, dangXuat } = reduxSlice.actions;
export default reduxSlice.reducer;
