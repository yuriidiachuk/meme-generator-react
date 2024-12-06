import styles from "./MemItem.module.css";
function MemItem({ meme, onUpvote, onDownvote }) {
  return (
    <div className={styles.memItem}>
      <img src={meme.img} alt={meme.title} />
      <p>{meme.title}</p>
      <button className={styles.like} onClick={() => onUpvote(meme.id)}>
        {meme.upvotes}
        <img src={"/images/like.png"} alt="like" />
      </button>
      <button className={styles.dislike} onClick={() => onDownvote(meme.id)}>
        {meme.downvotes} <img src={"/images/dislike.png"} alt="like" />
      </button>
    </div>
  );
}

export default MemItem;
