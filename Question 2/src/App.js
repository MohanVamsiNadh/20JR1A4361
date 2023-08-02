import { Route } from "react-router-dom";
import { Routes , Link } from "react-router-dom";

import AllTrainsData from "./components/AllTrainsData";
import SpecificTrainData from "./components/specificTrainData";

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<AllTrainsData/>} />
        <Route path="/:id" element={<SpecificTrainData />} />
      </Routes>
    </div>
  );
}

export default App;
