import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  font-family: "Roboto", sans-serif;
  width: 700px;
  color: #606060;
  background-color: #f4f4f4;

`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CenteredWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export {Container,Header, CenteredWrapper}