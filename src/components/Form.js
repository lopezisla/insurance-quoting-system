import React, { useState } from "react";
import styled from "@emotion/styled";
const Div = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;
const Form = () => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    scheme: "",
  });

  // extract state values
  const { brand, year, scheme } = data;

  // read form data and put it on the state
  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <Div>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Div>
      <Div>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Div>
      <Div>
        <Label>Scheme</Label>
        <InputRadio
          type="radio"
          name="scheme"
          value="base"
          checked={scheme === "base"}
          onChange={getData}
        />
        Base
        <InputRadio
          type="radio"
          name="scheme"
          value="full"
          checked={scheme === "full"}
          onChange={getData}
        />
        Full
      </Div>
      <Button type="button">Quote</Button>
    </form>
  );
};

export default Form;
