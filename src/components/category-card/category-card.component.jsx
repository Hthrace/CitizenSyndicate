import { CategoryCardContainer, Name } from "./category-card.styles";

const CategoryCard = ({ item }) => {
  const { name, imageUrl } = item;
  return (
    <CategoryCardContainer>
      <Name>{name}</Name>
      <img src={imageUrl} alt={`${name}`} />
    </CategoryCardContainer>
  );
};

export default CategoryCard;
