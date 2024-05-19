import styled from "styled-components";


const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #a7a5a5;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: flex-start;
`;
const NameEmailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
`;

export  { ContactContainer, ContactDetail, NameEmailContainer };
