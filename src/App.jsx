import { Routes, Route } from "react-router-dom";
import "./App.css";
import Post from "./components/UserPost";
import CreatePost from "./components/UserPost/CreatePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
