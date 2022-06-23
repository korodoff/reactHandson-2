import { useState } from "react";
import Displayform from "./displayform";

function FormFucntion() {
  const [displayData, setDisplayData] = useState([]);
  const [inputValue, setInputValue] = useState({
    Name: "",
    Department: "",
    Rating: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;

    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = e.target.value;
    if (checkEmptyInput !== "") {
      const data = inputValue;
      setDisplayData([...displayData, data]);

      const emptyInput = { Name: "", Department: "", Rating: "" };
      setInputValue(emptyInput);
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={onsubmit}>
          <h1>Employee Feedback form</h1>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="Name"
            id="Name"
            required
            value={inputValue.Name}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="Department">Department:</label>
          <input
            type="text"
            name="Department"
            id="Department"
            required
            value={inputValue.Department}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="Rating">Rating:</label>
          <input
            type="text"
            name="Rating"
            id="Rating"
            required
            value={inputValue.Rating}
            onChange={handleInput}
          />
          <br />
          <input type="submit" id="submit" />
        </form>
      </div>
      {/* <Displayform displayData={displayData} /> */}

      <div
        className="cardHolder"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {displayData.map((personObj, i) => {
          // console.log(kyrteng);
          const kyrteng = personObj.Name;
          const department = personObj.Department;
          const rating = personObj.Rating;
          return (
            <div className="card" key={i}>
              <Displayform
                kyrteng={kyrteng}
                department={department}
                rating={rating}
              />
              {/* <h3>personObj{personObj.Name}</h3> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FormFucntion;
