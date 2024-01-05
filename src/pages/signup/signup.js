import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 350px;
  height: 450px;
  background-color: rgba(41, 39, 39, 0.3);
  box-shadow: 0 5px 30px black;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: white;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-weight: bold;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(91, 243, 131);
    font-size: 17px;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const CheckBoxText = styled.span`
  color: rgb(199, 197, 197);
  font-size: 13px;
`;

const RegisterButton = styled.button`
  padding: 10px;
  width: 150px;
  border-radius: 20px;
  background-color: rgb(10, 136, 43);
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgba(10, 136, 43, 0.5);
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'agreeTerms' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here using formData
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <FormContainer>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              id="userName"
              name="userName"
              placeholder="User Name"
              autoComplete="off"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <CheckBoxText>I agree with term & conditions</CheckBoxText>
          </CheckBoxContainer>
          <FormGroup>
            <Link to="/"><RegisterButton type="submit">REGISTER</RegisterButton></Link>
          </FormGroup>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
