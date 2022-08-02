import { useEffect, useState } from "react";

export default function useGetNumberInfo(num) {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState();
  var myHeaders = new Headers();
  myHeaders.append("apikey", "YiNLySBaN54wMZ0hGDoldrhfbuzQpQsD");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  async function init() {
    try {
      const response = await fetch(
        `https://api.apilayer.com/number_verification/validate?number=${num}`,
        requestOptions
      );
      const responseJson = await response.json();
      setdata(responseJson);
    } catch (error) {
      seterror(error);
    }
  }
  useEffect(() => {
    init();
  }, []);

  return { data, error };
}
