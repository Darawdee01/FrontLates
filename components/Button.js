import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid transparent; /* ขอบเริ่มต้น */
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  

  ${(props) =>
    props.primary &&
    `
    background-color: #ac3520;
    color: #fff;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    &:active {
      transform: scale(0.95);
    }
  `}

  ${(props) =>
    props.outline &&
    `
    background: white; /* เปลี่ยนเป็นสีขาว */
    border: 2px solid black; /* ขอบดำ */
    color: black; /* ตัวอักษรดำ */
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: scale(0.95);
    }
  `}
`;

export default function Button({ children, primary, outline }) {
  return (
    <StyledButton primary={primary} outline={outline} style={{position: 'relative', top: '-440px',left:'100px'}}>
      {children}
    </StyledButton>
  );
}
