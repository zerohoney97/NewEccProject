import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

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
    margin-top: 10px;
  `;

  const TableBody = styled.div`
    display: flex;
    padding-left: 5px;
    padding-right: 10px;
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
    
        /* & {
          border-bottom: 1px solid #e5e5e5;
        } */
  `;

  return (
    <Table>
      {data.map(({ content }, i) => (
        <TableBody>
          <div>{content}</div>
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Checkbox className="checkBox" size="medium" />
            <Checkbox className="checkBox" size="medium" />
            <Checkbox className="checkBox" size="medium" />
            <Checkbox className="checkBox" size="medium" />
          </div>
        </TableBody>
      ))}
    </Table>
  );
};
export default PostTestTable;
