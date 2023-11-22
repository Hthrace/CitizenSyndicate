import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../routes/categories-preview/categories-preview.component";

const Locate = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" />
    </Routes>
  );
};

export default Locate;
