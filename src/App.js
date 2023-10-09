import {Route, Routes} from "react-router";
import MainMenu from "./components/pages/MainMenu/MainMenu";
import Fight from "./components/pages/Fight/Fight";

function App() {
  return (
      <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/fight" element={<Fight/>}/>
      </Routes>
  );
}

export default App;
