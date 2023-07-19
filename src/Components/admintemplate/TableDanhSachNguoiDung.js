import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Tag } from "antd";
import { getDanhSachNguoiDung, xoaNguoiDung } from "../../redux/getDataFromAPI";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên Tài Khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Họ Tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? "geekblue" : "green";
    //       if (tag === "loser") {
    //         color = "volcano";
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: "Số ĐT",
    dataIndex: "soDT",
    key: "soDT",
  },

  {
    title: "Action",
    key: "action",
    render: (record) => (
      <Space size="middle">
        <a
          onClick={() => {
            xoaNguoiDung(record.taiKhoan);
          }}
        >
          Delete
        </a>
      </Space>
    ),
  },
];

const TableDanhSachNguoiDung = () => {
  const danhSachNguoiDung = useSelector(
    (state) => state.duLieu.danhSachNguoiDung
  );
  const data = danhSachNguoiDung.map((nguoiDung, index) => {
    return { ...nguoiDung, id: index };
  });
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableDanhSachNguoiDung;
