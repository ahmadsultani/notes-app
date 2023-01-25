import styles from "./NoteItem.module.css";

export default function NoteItem(props) {
  const { note, onToggleArchive, onDeleteNote } = props;
  const { id, title, body, createdAt, archived } = note;

  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
  }

  const handleDeleteConfirmation = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirmation) {
      onDeleteNote(id);
    }
  };

  return (
    <li key={id} className={styles.card}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}>{showFormattedDate(createdAt)}</p>
        </div>
        <p>{body}</p>
      </div>
      <div className={styles.cardButtons}>
        <button type="button" onClick={() => onToggleArchive(id)}>
          {archived ? "Unarchive" : "Archive"}
        </button>
        <button
          className={styles.delete}
          type="button"
          onClick={handleDeleteConfirmation}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
