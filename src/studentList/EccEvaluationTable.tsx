import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";
import { useSelector } from "react-redux";
const EccEvaluationTable = (props: any) => {
  type studentEccInfo = {
    bigCategory: string;
    smallCategory: string;
    evaluationDate: string;
  };

  const StudentTable = styled.table`
    width: 100%;
    height: 500px;
    margin: auto;
    transition: 0.25s;
    cursor: pointer;
    & :hover {
      background: #e5e5e5;
      transition: 0.25s;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: auto;
      transition: 0.25s;
      cursor: pointer;
      & :hover {
        background: #e5e5e5;
        transition: 0.25s;
      }
    }
  `;

  const TableBody = styled.div`
    background: white;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 3rem;
    align-items: center;
    margin-top: 10px;
    color: black;
    & div {
      width: 33%;
      margin: auto;
    }
    @media screen and (max-width: 768px) {
      background: white;
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 3rem;
      align-items: center;
      margin-top: 10px;
      color: black;
      & div {
        width: 33%;
        margin: auto;
      }
    }
    /* &:nth-child(1) {
      background: #fafafa;
      & .goto-info {
        display: none;
      }
      & div {
        position: relative;
        left: -1%;
      }
    } */
  `;
  const DivideLine = styled.div`
    border-bottom: 1px solid #e5e5e5;
    margin: auto;
    width: 80%;
  `;

  return (
    <>
      {props.isMobile ? (
        <StudentTable>
          {props.trigger === "사전평가"
            ? props.studentPreEvaluationData.map((a: any, i: number) => {
                return (
                  <>
                    <Link
                      to={`/preTestResult/${props.studentInfo.studentUid}?bigCategory=${a.bigCategory}&smallCategory=${a.smallCategory}&date=${a.date}`}
                      style={{ textDecoration: "none" }}
                    >
                      <TableBody key={i}>
                        <div>{a.bigCategory}</div>
                        <div>{a.smallCategory}</div>
                        <div>{a.date}</div>
                      </TableBody>
                    </Link>
                    <DivideLine />
                  </>
                );
              })
            : props.studentPostEvaluationData.map((a: any, i: number) => {
                return (
                  <>
                    <Link
                      to={`/postTestResult/${props.studentInfo.studentUid}?bigCategory=${a.bigCategory}&smallCategory=${a.smallCategory}&date=${a.date}`}
                      style={{ textDecoration: "none" }}
                    >
                      <TableBody key={i}>
                        <div>{a.bigCategory}</div>
                        <div>{a.smallCategory}</div>
                        <div>{a.date}</div>
                      </TableBody>
                    </Link>
                    <DivideLine />
                  </>
                );
              })}

          {props.children}
        </StudentTable>
      ) : (
        <StudentTable>
          {props.trigger === "사전평가"
            ? props.studentPreEvaluationData.map((a: any, i: number) => {
                return (
                  <>
                    <Link
                      to={`/preTestResult/${props.studentInfo.studentUid}?bigCategory=${a.bigCategory}&smallCategory=${a.smallCategory}&date=${a.date}`}
                      style={{ textDecoration: "none" }}
                    >
                      <TableBody key={i}>
                        <div>{a.bigCategory}</div>
                        <div>{a.smallCategory}</div>
                        <div>{a.date}</div>
                      </TableBody>
                    </Link>
                    <DivideLine />
                  </>
                );
              })
            : props.studentPostEvaluationData.map((a: any, i: number) => {
                return (
                  <>
                    <Link
                      to={`/postTestResult/${props.studentInfo.studentUid}?bigCategory=${a.bigCategory}&smallCategory=${a.smallCategory}&date=${a.date}`}
                      style={{ textDecoration: "none" }}
                    >
                      <TableBody key={i}>
                        <div>{a.bigCategory}</div>
                        <div>{a.smallCategory}</div>
                        <div>{a.date}</div>
                      </TableBody>
                    </Link>
                    <DivideLine />
                  </>
                );
              })}

          {props.children}
        </StudentTable>
      )}
    </>
  );
};

export default EccEvaluationTable;
