import { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "../util/NavBar";
import {
  PreTestContainer,
  ButtonContainer,
  BackButton,
} from "../Evaluation/evaluationStyleComponent";
import { ReactComponent as DropDownSVG } from "../Resource/svg/dropDown.svg";
import { useDispatch, useSelector } from "react-redux";
import PreTestResultTable from "./PreTestResultTable";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { serverUrl } from "../util/globalVariants";

const CompareResult = ({ isMobile }: { isMobile: boolean }) => {
  return <>{isMobile ? <></> : <></>}</>;
};

export default CompareResult;
