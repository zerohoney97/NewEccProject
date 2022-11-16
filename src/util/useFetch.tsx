import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function useFetch(query:any, page:any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<any>([]);
  const teacherInfo = useSelector((state: any) => {
    return state.teacherInfo;
  });
  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get('url');
      await setList((prev:any) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err:any) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    axios
      .get("/getStudentInformationByTeacher", {
        params: { data: teacherInfo.uid },
      })
      .then((result) => {
        const temp = list.concat(result.data);
        setList(temp);
      });
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;