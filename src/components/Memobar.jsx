import MemItem from "./MemItem";
import styles from "./Memobar.module.css";
function Memobar({ showHot, regularMemes, hotMemes, onUpvote, onDownvote }) {
  return (
    <>
      {showHot ? (
        <div className={styles.memobar}>
          {hotMemes.map((meme) => (
            <MemItem
              key={meme.id}
              title={meme.title}
              onUpvote={onUpvote}
              onDownvote={onDownvote}
              meme={meme}
            />
          ))}
          {hotMemes.length === 0 && <p>No hot memes yet!</p>}
        </div>
      ) : (
        <div className={styles.memobar}>
          {regularMemes.map((meme) => (
            <MemItem
              key={meme.id}
              title={meme.title}
              onUpvote={onUpvote}
              onDownvote={onDownvote}
              meme={meme}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Memobar;
