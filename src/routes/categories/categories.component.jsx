import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../../components/category/category.component";
import CATEGORIES_DATA from "../../data/categories-data/categories-data";
import SUB_CATEGORIES_ARMOR_DATA from "../../data/sub-categories-data/sub-categories-armor/sub-categories-armor-data";
import SUB_CATEGORIES_COMPONENTS_DATA from "../../data/sub-categories-data/sub-categories-components/sub-categories-components";
import SUB_CATEGORIES_WEAPONS_DATA from "../../data/sub-categories-data/sub-categories-weapons/sub-categories-weapons";

const Categories = () => {
  const [catData, setCatData] = useState(CATEGORIES_DATA);
  let { category } = useParams();
  useEffect(() => {
    const data = {
      armor: SUB_CATEGORIES_ARMOR_DATA,
      components: SUB_CATEGORIES_COMPONENTS_DATA,
      weapons: SUB_CATEGORIES_WEAPONS_DATA,
    };
    if (category) {
      setCatData(data[category]);
    } else {
      setCatData(CATEGORIES_DATA);
    }
    return;
  }, [category]);
  return (
    <>
      <Category category={catData} />
    </>
  );
};

export default Categories;
