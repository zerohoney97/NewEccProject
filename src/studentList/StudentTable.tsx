import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";
import { studentList } from "../util/Type";

const Table= ({studentList}:{studentList:studentList[]}) => {


  const setStudentInfo=()=>{

  }
 
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
    height: 83px;
    align-items: center;
    margin-top: 10px;
    & div {
      width: 16%;
      margin: auto;
    }

    &:nth-child(1) {
      background: #fafafa;
      & .goto-info {
        visibility: hidden;
      }
      & div {
        position: relative;
        left: -1%;
      }
    }
  `;

  return (
    <StudentTable>
      {studentList.map(({ name, attrClass, birth, recent, gender }, i) => (
        <TableBody>
          <div>{name}</div>
          <div>{attrClass}</div>
          <div>{birth}</div>
          <div>{recent}</div>
          <div>{gender}</div>
          <Link to="/studentInfo" onClick={()=>{alert('클릭')}}>
            <GotoInfo className="goto-info" />
          </Link>
        </TableBody>
      ))}
    </StudentTable>
  );
};

export default Table;
