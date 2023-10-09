import {Route, Routes} from "react-router";
import MainMenu from "./components/pages/MainMenu/MainMenu";
import FightField from "./components/pages/Fight/FightField";

function App() {
  return (
      <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/fight" element={<FightField/>}/>
      </Routes>
  );
}

export default App;
