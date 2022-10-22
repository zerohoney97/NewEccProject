import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";

const PreTestTable = () => {
  type preTestType = {
    content: string;
  };
  const [data, setData] = useState<preTestType[]>([
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
          <Checkbox className="checkBox" size="medium" />
        </TableBody>
      ))}
    </Table>
  );
};

export default PreTestTable;
