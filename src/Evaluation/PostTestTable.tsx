import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PostTestTable = () => {
  type postTestType = {
    content: string;
  };
  const [data, setData] = useState<postTestType[]>([
    { content: "각 카테고리에 있는 항목" },
    { content: "각 카테고리에 있는 항목" },
    { content: "각 카테고리에 있는 항목" },
    { content: "각 카테고리에 있는 항목" },
    { content: "각 카테고리에 있는 항목" },
  ]);

  const Table = styled.table`
    width: 100%;
    height: 500px;
    background: #ffffff;
    margin: auto;
    margin-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 40px;
    border: 1px solid #e5e5e5;
  `;

  const TableBody = styled.div`
    display: flex;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
    margin-top: 10px;

    /* &:nth-child(1) {
          font-weight: bold;
          .checkBox {
            visibility: hidden;
          }
        }
     */
    & {
      border-bottom: 1px solid #e5e5e5;
    }
  `;

  return (
    <Table>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <span style={{ fontWeight: "bold" }}>문항</span>
        <div
          style={{
            width: "142px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: "bold" }}>1</span>
          <span style={{ fontWeight: "bold" }}>2</span>
          <span style={{ fontWeight: "bold" }}>3</span>
          <span style={{ fontWeight: "bold" }}>C</span>
        </div>
      </div>
      {data.map(({ content }, i) => (
        <TableBody>
          <div>{content}</div>
          <div
            style={{
              width: "142px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <input
              type={"checkbox"}
              style={{ zoom: "2.0" }}
              className="checkBox"
            />
            <input
              type={"checkbox"}
              style={{ zoom: "2.0" }}
              className="checkBox"
            />
            <input
              type={"checkbox"}
              style={{ zoom: "2.0" }}
              className="checkBox"
            />
            <input
              type={"checkbox"}
              style={{ zoom: "2.0" }}
              className="checkBox"
            />
          </div>
        </TableBody>
      ))}
    </Table>
  );
};
export default PostTestTable;
