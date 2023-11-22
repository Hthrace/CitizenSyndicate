import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Locate from "./locate/locate.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="locate/*" element={<Locate />} />
        <Route path="update/*" />
      </Route>
    </Routes>
  );
}

export default App;
