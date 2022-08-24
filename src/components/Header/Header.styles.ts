import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Header = styled.header`
  background: ${colors.purple_200};

  .wrapper {
    max-width: 64rem;
    margin: 0 auto;

    padding: 1.5rem 1rem 10rem;
    display: flex;
    justify-content: space-between;
  }

  .containerTitle {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-size: 2.2rem;
      color: ${colors.white};
    }
  }

  .button {
    height: 3rem;
    padding: 1rem 2rem;
    outline: 0;
    border: 0;
    border-radius: 0.313rem;

    font-size: 0.9rem;
    font-weight: 500;
    background: #2a1695;
    color: ${colors.white};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
