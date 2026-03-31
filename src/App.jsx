import Setting from "./pages/Setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Settings" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
