import styled from "styled-components";

export const buttonStyle = `
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  ${({ $primary }) =>
    $primary &&
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

  ${({ $outline }) =>
    $outline &&
    `
    background: white;
    border: 2px solid black;
    color: black;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: scale(0.95);
    }
  `}

  ${({ $white }) =>
    $white &&
    `
    background-color: white;
  `}
`;

const StyledButton = styled.button`${buttonStyle}`;

export default function Button({ children, primary, outline, white }) {
  return (
    <StyledButton
      $primary={primary}   // ใช้ $ ก่อน prop
      $outline={outline}   // ใช้ $ ก่อน prop
      $white={white}       // ใช้ $ ก่อน prop
      style={{ position: 'relative', top: '-450px', left: '110px', background: '#ac3520' }}
    >
      {children}
    </StyledButton>
  );
}
