import styles from "./AddNewMem.module.css";
function AddNewMem({ handleSubmit, memeName, setMemeName, setMemeImage }) {
  return (
    <div className={styles.addNewMem}>
      <h1>Add your mem</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Meme Name: </label>
          <input
            type="text"
            value={memeName}
            onChange={(e) => setMemeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="img/*"
            onChange={(e) =>
              setMemeImage(URL.createObjectURL(e.target.files[0]))
            }
            required
          />
        </div>
        <button type="submit">Add Meme</button>
      </form>
    </div>
  );
}

export default AddNewMem;
