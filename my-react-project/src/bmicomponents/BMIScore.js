import React from "react";

export default function BMIScore({bmi,BmiType}) {
  return (
    <div>
     <h3>BMI:{bmi}</h3>
     <h3>BMI TYPE:{BmiType}</h3>
    </div>
  );
}

/* export default function BMISCore(props) {
 console.log(props);
    const{Mybmi,myBmiType}=props;
  return (
    <div>
      BMISCore : {Mybmi}<br/>
      BMIType : {myBmiType}
    </div>
  );
}
 */
