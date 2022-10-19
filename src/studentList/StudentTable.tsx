import React from "react";
import styled from "styled-components";

const Table = () => {
  const StudentTable = styled.table`
    width: 100%;
    margin: auto;
  `;

  const TableBody = styled.div`
    background: #e5e5e5;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 3rem;
    align-items: center;
    & span {
      margin: auto;
    }

    &:nth-child(1) {
      background: white;
      & span {
        position: relative;
        left: -1%;
      }
    }
  `;

  const columns = [
    "이름",
    "반",
    "담당교사",
    "평가날짜",
    "부모님 전화번호",
    "기타사항",
  ];
  const data = [
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
  ];

  return (
    <StudentTable>
      {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </div> */}
      {data.map(({ name, attrClass, teacher, date, paPhone }, i) => (
        <TableBody>
          <span>{name}</span>
          <span>{attrClass}</span>
          <span>{teacher}</span>
          <span>{date}</span>
          <span>{paPhone}</span>
        </TableBody>
      ))}
    </StudentTable>
  );
};

export default Table;
