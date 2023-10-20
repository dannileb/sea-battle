import {Route, Routes} from "react-router";
import MainMenu from "./components/pages/MainMenu/MainMenu";
import Layout from "./components/pages/Layout/Layout";

function App() {
  return (
      <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/fight" element={<Layout/>}/>
      </Routes>
  );
}

export default App;
