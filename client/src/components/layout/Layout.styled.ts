import styled from "styled-components";

export const StyledLayout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #68dcc8;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const ErrorMessage = styled.span`
  color: crimson;
  font-size: 18px;
  margin-right: auto;
`;
