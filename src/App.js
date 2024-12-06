import Navbar from "./components/Navbar";
import Memobar from "./components/Memobar";
import Hotbar from "./components/Hotbar";
import AddNewMem from "./components/AddNewMem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import { useState } from "react";
import { data } from "../src/data/memesList.jsx";

function App() {
  const [memesList, setMemesList] = useState(data);
  const [showHot] = useState(false);
  const [memeName, setMemeName] = useState("");
  const [memeImage, setMemeImage] = useState(null);

  console.log(memesList);
  // Handle upvote
  const handleUpvote = (id) => {
    setMemesList((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === id ? { ...meme, upvotes: meme.upvotes + 1 } : meme
      )
    );
  };

  // Handle downvote
  const handleDownvote = (id) => {
    setMemesList((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === id ? { ...meme, downvotes: meme.downvotes + 1 } : meme
      )
    );
  };

  // Handle new mem
  const addMeme = (newMeme) => {
    setMemesList((prevMemes) => [newMeme, ...prevMemes]);
    memesList.indexOf(newMeme);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (memeName && memeImage) {
      addMeme({
        id: memesList.length + 1,
        title: memeName,
        upvotes: 0,
        downvotes: 0,
        img: memeImage,
      });
      setMemeName("");
      setMemeImage(null);
    }
  };

  // Filter Hot Memes
  const hotMemes = memesList.filter(
    (meme) => meme.upvotes > 6 && meme.downvotes < 6
  );

  // Filter Regular Memes
  const regularMemes = memesList.filter((meme) => meme.upvotes <= 6);

  return (
    <BrowserRouter>
      <div>
        <Navbar regularMemes={regularMemes} hotMemes={hotMemes} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Memobar
                  showHot={showHot}
                  hotMemes={hotMemes}
                  regularMemes={regularMemes}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                />
              }
            />
            <Route
              path="/hot"
              element={
                <Hotbar
                  onDownvote={handleDownvote}
                  onUpvote={handleUpvote}
                  hotMemes={hotMemes}
                />
              }
            />
            <Route
              path="/add"
              element={
                <AddNewMem
                  handleSubmit={handleSubmit}
                  memeName={memeName}
                  setMemeImage={setMemeImage}
                  setMemeName={setMemeName}
                />
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
