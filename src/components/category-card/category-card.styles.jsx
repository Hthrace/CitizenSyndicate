import styled from "styled-components";

export const CategoryCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 25px;
  }

  &:hover {
    img {
      opacity: 0.8;
      border: 2px solid black;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
