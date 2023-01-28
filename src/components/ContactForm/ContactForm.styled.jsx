import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  border: solid 1px black;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  height: 25px;
  width: 400px;
  margin-top: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #144722;
  color: #ffffff;
  cursor: pointer;
`;
