import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title }) => {
  return (
    <CategoryPreviewContainer>
      <Preview>
      <Link to={title}>{title.toUpperCase()}</Link>
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;