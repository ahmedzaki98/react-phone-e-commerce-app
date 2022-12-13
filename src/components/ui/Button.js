import styled from "styled-components";
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  background: white;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 1.5rem;
  color: var(--lightBlue);
  padding: 0.25rem 0.7rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem auto;
  transition: all 0.2s ease-in-out;
  span {
    margin-left: 0.3rem;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    color: var(--mainYellow);
  }

  &:focus {
    outline: none;
  }
`;
