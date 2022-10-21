import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";

const Table = () => {
  type studentInfo = {
    name: string;
    attrClass: string;
    teacher: string;
    date: string;
    paPhone: string;
    extra: string;
  };
  const [data, setData] = useState<studentInfo[]>([
    {
      name: "이름",
      attrClass: "반",
      teacher: "담당교사",
      date: "평가날짜",
      paPhone: "부모님 전화번호",
      extra: "기타사항",
    },
    {
      name: "홍길동",
      attrClass: "A반",
      teacher: "박보배",
      date: "2022-10-03",
      paPhone: "010-3333-5555",
      extra: "없음",
    },
    {
      name: "오다가우 유사와라",
      attrClass: "B반",
      teacher: "에비모 하시노",
      date: "2022-10-30",
      paPhone: "010-3333-5555",
      extra: "커여움",
    },
  ]);

  const StudentTable = styled.table`
    width: 100%;
    height: 500px;
    margin: auto;
  `;

  const TableBody = styled.div`
    background: white;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 3rem;
    align-items: center;
    margin-top: 10px;
    & div {
      width: 16%;
      margin: auto;
    }

    &:nth-child(1) {
      background: #fafafa;
      & .goto-info {
        display: none;
      }
      & div {
        position: relative;
        left: -1%;
      }
    }
  `;

  return (
    <StudentTable>
      {data.map(({ name, attrClass, teacher, date, paPhone, extra }, i) => (
        <TableBody>
          <div>{name}</div>
          <div>{attrClass}</div>
          <div>{teacher}</div>
          <div>{date}</div>
          <div>{paPhone}</div>
          <div>{extra}</div>
          <GotoInfo className="goto-info" />
        </TableBody>
      ))}
    </StudentTable>
  );
};

export default Table;
