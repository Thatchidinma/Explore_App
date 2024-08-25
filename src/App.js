import { HomePage } from "./components/homepage";
import { Footer } from "./components/footer";
import { Main } from "./components/main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App text-white bg-blue-300">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
