import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { firebaseConfig } from "../Authentication/SignIn";
import { setTeacherUidAndName } from "../redux/slice/userReducer";

import axios from "axios";
import { useParams } from "react-router";

const auth = getAuth();

const ValidateSignIn = () => {
  //로그인이 필요없는 특정 주소
  const exceptionURL = {
    signUp: "signUp",
    signIn: "signIn",
    findEmail: "findEmail",
    findPass: "findPass",
  };
  // 로그인이 안됐을 경우 강제이동 시키는 hook
  const navigate = useNavigate();

  const app = initializeApp(firebaseConfig);
  let dispatch = useDispatch();
  let link = document.location.href;
  console.log(link.split("/")[3]);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      let uid = user.uid;
      axios
        .get("/getTeacherInformation", { params: { uid: uid } })
        .then((result) => {
          const information = {
            uid: uid,
            name: result.data.name,
          };
          dispatch(setTeacherUidAndName(information));
          if (
            link.split("/")[3] === exceptionURL.signUp ||
            link.split("/")[3] === exceptionURL.signIn ||
            link.split("/")[3] === exceptionURL.findEmail ||
            link.split("/")[3] === exceptionURL.findPass
          ) {
            alert("이미 로그인 되어 있습니다!");
            navigate("/studentList");
          }
        });
      // 로그인 여부를 판단하고 uid를 redux-persist에 저장
      // ...
    } else {
      // User is signed out
      // ...
      if (
        link.split("/")[3] !== exceptionURL.signUp &&
        link.split("/")[3] !== exceptionURL.signIn &&
        link.split("/")[3] !== exceptionURL.findEmail &&
        link.split("/")[3] !== exceptionURL.findPass
      ) {
        alert("먼저 로그인해 주세요");
        navigate("/signIn");
      }
    }
  });
  return <></>;
};

export default ValidateSignIn;
