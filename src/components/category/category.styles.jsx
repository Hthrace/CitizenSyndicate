import styled from "styled-components";

export const CategoryContainer = styled.div`
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

export const CategoryPreviewTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
  border-bottom: 1px solid darkgrey;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;

  @media screen and (max-width: 900px) {
    margin: 0 auto;
  }
`;
