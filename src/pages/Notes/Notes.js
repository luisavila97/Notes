import styles from "./Notes.module.css";

const Notes = ({ entries, handleRemove, showPost }) => {
  return (
    <div className={styles.notes}>
      <h1>Notes</h1>
      {entries &&
        entries.map((note) => (
          <div className={styles.note}>
            <h2>{note.title}</h2>
            <button className="btn" onClick={() => showPost(note)}>
              👀
            </button>
            <button className="btn-delete" onClick={() => handleRemove(note.id)}>
              🗑️
            </button>
          </div>
        ))}
    </div>
  );
};

export default Notes;
