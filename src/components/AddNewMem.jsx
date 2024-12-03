import styles from "./AddNewMem.module.css";
function AddNewMem({ handleAddMem }) {
  return (
    <div className={styles.addnewmem}>
      <h1>Add your mem</h1>
      <input type="file" />
      <button onClick={handleAddMem}>Add mem</button>
    </div>
  );
}

export default AddNewMem;
