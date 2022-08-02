import { React, useState } from "react";
import FormsInput from "./FormsInput";
function Viewdetail(props) {
  //   const goBack = () => {
  //     return <FormsInput />;
  //   };
  const { Name, num, city, country, gender, goback } = props;

  return (
    <div className="viewdetails">
      <fieldset>
        <legend>Bio Data</legend>
        <div>
          <span>Name: </span> {Name}
        </div>
        <div>
          <span>Number: </span> {num}
        </div>
        <div>
          <span>City: </span> {city}
        </div>
        <div>
          <span>Gender: </span> {gender}
        </div>
        <div>
          <span>Country: </span> {country}
        </div>
        <button
          type="button"
          id="viewdetails"
          onClick={() => {
            console.log(goback);
            goback();
          }}
        >
          Go Back
        </button>
      </fieldset>
    </div>
  );
}
export default Viewdetail;
