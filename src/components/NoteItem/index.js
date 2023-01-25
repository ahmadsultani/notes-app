import styles from "./NoteItem.module.css";

export default function NoteItem(props) {
  const { note, onToggleArchive, onDeleteNote } = props;
  const { id, title, body, archived } = note;

  const handleDeleteConfirmation = () => {
    const confirmation = window.confirm("Are you sure you want to delete this note?");
    if (confirmation) {
      onDeleteNote(id);
    }
  };

  return (
    <li key={id} className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={styles.cardButtons}>
        <button type="button" onClick={() => onToggleArchive(id)}>
          {archived ? "Unarchive" : "Archive"}
        </button>
        <button className={styles.delete} type="button" onClick={handleDeleteConfirmation}>
          Delete
        </button>
      </div>
    </li>
  );
}
