import React from "react";

function Displayform(props) {
  const { kyrteng, department, rating } = props;
  console.log(kyrteng);

  return (
    <>
      <div className="cardDisplay">
        <h3>
          Name:{kyrteng}|Department:{department}|Rating:{rating}
        </h3>
      </div>
      <div>
        <button className="btn" onClick={props.togglefunction}>
          onClick
        </button>
      </div>
    </>
  );
}

export default Displayform;
