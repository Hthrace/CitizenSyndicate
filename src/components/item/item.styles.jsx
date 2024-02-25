import styled from "styled-components";

export const ItemContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 50px;
  text-align: center;
`;