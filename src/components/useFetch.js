import { useEffect, useState } from "react";

const useFetch = (url) => {
  //passing the endpoint
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  const getStudentData = async()=> {
     fetch(url, {})
      .then((res) => {
        console.log(res.clone().json(), "response");
        if (!res.ok) {
          //error coming back from server
          throw Error("could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, "data");
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err, "error");
        setError(err.message);
        setIsPending(false);
      });
  }
  useEffect(() => {
    getStudentData();
    console.log(url)
    
  }, [url]);

  return { data, isPending, error }; //we are getting these three properties back
};

export default useFetch;