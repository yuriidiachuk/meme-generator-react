import Navbar from "./components/Navbar";
import Memobar from "./components/Memobar";
import Hotbar from "./components/Hotbar";
import AddNewMem from "./components/AddNewMem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Mem 1",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img1.jpg",
  },
  {
    id: 2,
    title: "Mem 2",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img2.jpg",
  },
  {
    id: 3,
    title: "Mem 3",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img3.jpg",
  },
  {
    id: 4,
    title: "Mem 4",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img4.jpg",
  },
  {
    id: 5,
    title: "Mem 5",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img5.jpg",
  },
  {
    id: 6,
    title: "Mem 6",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img6.jpg",
  },
  {
    id: 7,
    title: "Mem 7",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img7.jpg",
  },
  {
    id: 8,
    title: "Mem 8",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img8.jpg",
  },
  {
    id: 9,
    title: "Mem 9",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img9.jpg",
  },
  {
    id: 10,
    title: "Mem 10",
    upvotes: 0,
    downvotes: 0,
    img: "/images/img10.jpg",
  },
];

function App() {
  const [memesList, setMemesList] = useState(data);
  const [showHot, setShowHot] = useState(false);

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
  function handleAddMem() {
    const newMeme = {
      id: data.length + 1,
      title: `Mem ${data.length + 1}`,
      upvotes: 0,
      downvotes: 0,
      img: `/images/img${data.length + 1}.jpg`,
    };

    setMemesList([newMeme, ...memesList]);
  }

  // Filter Hot Memes
  const hotMemes = memesList.filter(
    (meme) => meme.upvotes > 6 && meme.downvotes < 6
  );

  // Filter Regular Memes
  const regularMemes = memesList.filter((meme) => meme.upvotes <= 6);

  return (
    <BrowserRouter>
      <div>
        <Navbar
          setShowHot={setShowHot}
          regularMemes={regularMemes}
          hotMemes={hotMemes}
        />
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
              element={<AddNewMem handleAddMem={handleAddMem} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
