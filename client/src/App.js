import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <main id="main">
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
