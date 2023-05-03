import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import ContextProvider from "./Context/ContextProvider";
import Detail from "./pages/Detail";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/fav" element={<Favorite />} />
          <Route path="/movies/:id" element={<Detail />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
