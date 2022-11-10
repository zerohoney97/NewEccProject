import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Authentication/SignIn";
import { setTeacherUidAndName } from "../redux/slice/userReducer";

import axios from "axios";

const auth = getAuth();

const ValidateSignIn = () => {
  const app = initializeApp(firebaseConfig);
  let dispatch = useDispatch();

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
        });
      // 로그인 여부를 판단하고 uid를 redux-persist에 저장
      // ...
    } else {
      // User is signed out
      // ...
      alert("먼저 로그인해 주세요");
    }
  });
  return(<></>)
};

export default ValidateSignIn;