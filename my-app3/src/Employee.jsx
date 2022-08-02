import React from "react";
function Employee(props) {
  const { name, Eid, Pno } = props;
  return (
    <div>
      {`The Employe Name is ${name}, Employee ID is ${Eid} and Mobile number is +91-${Pno}`}
    </div>
  );
}
export default Employee;
