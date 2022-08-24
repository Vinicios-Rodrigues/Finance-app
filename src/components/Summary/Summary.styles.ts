import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: -7rem;

  .content {
    background-color: ${colors.white};
    width: 20rem;
    border-radius: 5px;
    padding: 1rem;
    background: white;
    color: #363f5f;
  }
  .content:last-child {
    background: ${colors.blue};
    color: ${colors.white};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  img {
    width: 1.8rem;
  }
  strong {
    font-size: 2.25rem;
  }
`;
