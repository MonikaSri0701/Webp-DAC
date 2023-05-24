import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BMIForm() {
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const onSubmit = (e) => e.preventDefault();
  if(isNaN(Weight) || isNaN(Height))
  {
    console.log("wrong input");
  }
  else
  getData
  return (
    <div>
      <Form classname ="formbmi"
    <Form.Group className="FormInput" controlId="formHeight">
          <Form.Control 
          type="text"
           placeholder="Height in M" 
           value={Height}
           onChange={(e)=>setHeight(e.target.value)}
           className="form-control"
           />
        <Form.Control type="text" placeholder="Height(in mts)" />
        </Form.Group>
        <Button variant="primary" type="submit">Get BMI</Button>
      </div>
  );
}
export default BMIForm;