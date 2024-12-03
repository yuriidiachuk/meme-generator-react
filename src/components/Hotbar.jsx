import styles from "./Hotbar.module.css";
import MemItem from "./MemItem";

function Hotbar({ hotMemes, onUpvote, onDownvote }) {
  return (
    <div className={styles.hotbar}>
      {hotMemes.map((meme) => (
        <MemItem
          key={meme.id}
          title={meme.title}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          meme={meme}
        />
      ))}
      {hotMemes.length === 0 && (
        <p style={{ fontSize: "20px" }}>No hot memes yet!😔</p>
      )}
    </div>
  );
}

export default Hotbar;
