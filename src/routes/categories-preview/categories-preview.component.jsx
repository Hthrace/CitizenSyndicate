import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  //Placeholder
  const catArry = ["Ship-Comp", "Armor", "Weapons"];
  return (
    <>
      {catArry.map((title, idx) => {
        return <CategoryPreview key={idx} title={title} />;
      })}
    </>
  );
};

export default CategoriesPreview;
