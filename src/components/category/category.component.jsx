import { Link } from "react-router-dom";
import { Fragment } from "react";
import { CategoryContainer, Preview } from "./category.styles";
import CategoryCard from "../category-card/category-card.component";

const Category = ({ category }) => {
  return (
    <CategoryContainer>
      {category.map((cat) => {
        return (
          <Fragment key={cat.id}>
            <Preview>
              <Link to={cat.name.toLowerCase()}>
                <CategoryCard item={cat} />
              </Link>
            </Preview>
          </Fragment>
        );
      })}
    </CategoryContainer>
  );
};

export default Category;
