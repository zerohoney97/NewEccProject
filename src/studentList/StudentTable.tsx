import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as GotoInfo } from "../Resource/svg/rightArrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { studentList } from "../util/Type";
import { setStudentInformation } from "../redux/slice/studentReducer";

const Table = ({
  studentList,
  isMobile,
  page,
}: {
  studentList: studentList[];
  isMobile: boolean;
  page: number;
}) => {
  let dispatch = useDispatch();
  const StudentTable = styled.table`
    width: 1200px;
    height: 500px;
    margin: auto;
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      margin-top: 15px;

      width: 100%;
      background: #fafafa;
      margin: auto;
    }
  `;

  const TableBody = styled.div`
    background: white;
    display: flex;
    width: 100%;
    height: 83px;
    align-items: center;
    margin-top: 10px;
    & div {
      width: 16%;
      margin: auto;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      background: white;
      margin: auto;
      height: 5rem;
      margin-top: 10px;

      & div {
        width: 30%;
        margin: auto;
      }
    }
    /* &:nth-child(1) {
      background: #fafafa;
      & .goto-info {
        visibility: hidden;
      }
      & div {
        position: relative;
        left: -1%;
      }
    } */
  `;
  const setClickedStudent = (
    name: string,
    attrClass: string,
    birth: string,
    recent: string,
    gender: string,
    _id: string
  ) => {
    dispatch(
      setStudentInformation({
        name: name,
        attrClass: attrClass,
        birth: birth,
        recent: recent,
        gender: gender,
        studentUid: _id,
      })
    );
  };


  return (
    <>
      {isMobile ? (
        <StudentTable>
          {studentList.map(
            ({ name, attrClass, birth, recent, gender, _id }, i) => (
              <Link
                to={`/studentInfo/${_id}`}
                onClick={() => {
                  setClickedStudent(
                    name,
                    attrClass,
                    birth,
                    recent,
                    gender,
                    _id
                  );
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <TableBody>
                  <div>{name}</div>
                  <div>{birth}</div>
                  <div>{recent}</div>
                </TableBody>
              </Link>
            )
          )}
        </StudentTable>
      ) : (
        <StudentTable>
          {studentList.map(
            (
              {
                name,
                attrClass,
                birth,
                recent,
                gender,
                _id,
              }: {
                name: string;
                attrClass: string;
                birth: string;
                recent: string;
                gender: string;
                _id: string;
              },
              i: number
            ) => (
              <TableBody>
                <div>{name}</div>
                <div>{attrClass}</div>
                <div>{birth}</div>
                <div>{recent}</div>
                <div>{gender}</div>
                <Link
                  to={`/studentInfo/${_id}`}
                  onClick={() => {
                    setClickedStudent(
                      name,
                      attrClass,
                      birth,
                      recent,
                      gender,
                      _id
                    );
                  }}
                >
                  <GotoInfo className="goto-info" />
                </Link>
              </TableBody>
            )
          )}
        </StudentTable>
      )}
    </>
  );
};

export default Table;
