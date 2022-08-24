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
    color: #64656a;
    font-weight: 400;
  }
  td {
    border-radius: 0.25rem;
    background: ${colors.white};
    text-align: left;
    padding: 1rem 2rem;
  }
`;
