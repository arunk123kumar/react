import React from "react";
import { useParams } from "react-router-dom";
import getNumberInfo from "./getNumberInfo";
export default function useRandomNumber() {
  const { num } = useParams();
  const { data, error } = getNumberInfo(num);
  if (num.length == 10)
    return (
      <>
        <h1>{data["carrier"]}</h1>
        <h1>{data["country_code"]}</h1>
        <h1>{data["country_name"]}</h1>
        <h1>{data["prefix"]}</h1>
        <h1>{data["location"]}</h1>
        <h1>{data["number"]}</h1>
        <h1>{data["message"]}</h1>
      </>
    );
  else {
    return <h1>Invalid Number</h1>;
  }
}
