import styled from "styled-components";

export const Input = styled.input`
  padding: 0;
  outline: none;
  border: none;
  border-radius: 20px;
  height: 35px;
  width: 100%;
  padding: 0 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  color: #FAFDF3;
  width: 400px;
  padding: 0 50px;
`;

export const Label = styled.label`
  font-size: 22px;
`;

export const InputError = styled.span`
  margin-left: auto;
  color: crimson;
  font-size: 14px;
`;
