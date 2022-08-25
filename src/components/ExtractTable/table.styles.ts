import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0rem 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }
  th {
    text-align: left;
    padding: 1rem 2rem;
    color: #919598;
    filter: brightness(0.4);
    font-weight: 500;
  }
  td {
    background: ${colors.white};
    color: #757677;
    text-align: left;
    padding: 1rem 2rem;

    &:first-child {
      color: ${colors.black_200};
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`;
