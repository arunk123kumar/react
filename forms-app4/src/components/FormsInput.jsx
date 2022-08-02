import { React, useState } from "react";
import ViewDetail from "./ViewDetail";
function FormsInput() {
  const [biodata, setBiodata] = useState({});
  const [isOpen, setisOpen] = useState(false);
  const doSubmit = () => {
    if (!biodata.Name || !biodata.num || !biodata.country || !biodata.city) {
      alert("Please fill all the data");
    } else if (isNaN(biodata.num)) {
      alert("Please Enter Valid Mobile Number");
    } else if (!isNaN(biodata.country)) {
      alert("Please Enter Valid Country");
    } else if (!isNaN(biodata.city)) {
      alert("Please Enter Valid City Name");
    } else if (!isNaN(biodata.Name)) {
      alert("Please Enter Valid name");
    } else {
      localStorage.setItem("data", JSON.stringify(biodata));
      setisOpen(true);
    }
  };

  const handleGoBack = () => {
    setBiodata({});
    setisOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <ViewDetail
          Name={biodata.Name}
          num={biodata.num}
          city={biodata.city}
          country={biodata.country}
          gender={biodata.gender}
          goback={handleGoBack}
        />
      ) : (
        <form>
          <fieldset>
            <legend>Bio Data</legend>
            <label htmlFor="name">
              Name
              <input
                type="text"
                onChange={(e) =>
                  setBiodata({ ...biodata, Name: e.target.value })
                }
                value={biodata.Name}
                id="name"
              />
            </label>
            <label htmlFor="pno">
              Phone Number
              <input
                type="text"
                onChange={(e) =>
                  setBiodata({ ...biodata, num: e.target.value })
                }
                value={biodata.num}
                id="pno"
              />
            </label>
            <label htmlFor="city">
              City
              <input
                type="text"
                onChange={(e) =>
                  setBiodata({ ...biodata, city: e.target.value })
                }
                value={biodata.city}
                id="city"
              />
            </label>
            <label htmlFor="gender">
              Gender:
              <div id="gender">
                <label htmlFor="Male">
                  <input
                    id="Male"
                    type="radio"
                    name="gender"
                    onChange={(e) => setBiodata({ ...biodata, gender: "Male" })}
                  />
                  Male
                </label>
                <label htmlFor="Female">
                  <input
                    id="Female"
                    type="radio"
                    name="gender"
                    onChange={(e) =>
                      setBiodata({ ...biodata, gender: "Female" })
                    }
                  />
                  Female
                </label>
              </div>
            </label>

            <label htmlFor="country">
              Country
              <select
                name="Country"
                id="country"
                value={biodata.country}
                onChange={(e) =>
                  setBiodata({ ...biodata, country: e.target.value })
                }
              >
                <option value="opt">Select Country</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
              </select>
            </label>
            <button type="button" id="submit" onClick={doSubmit}>
              Submit
            </button>
            <button type="reset" id="reset" onClick={() => setBiodata({})}>
              Reset
            </button>
          </fieldset>
        </form>
      )}
    </>
  );
}

export default FormsInput;
