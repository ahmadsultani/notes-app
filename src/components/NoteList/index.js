import NoteItem from "../NoteItem";

import styles from "./NoteList.module.css";

export default function Notes(props) {
  const { notes, onToggleArchive, onDeleteNote, type } = props;

  return (
    <div className={styles.container}>
      <h1>{type} Notes</h1>
      <ul className={styles.noteContainer}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onToggleArchive={onToggleArchive}
              onDeleteNote={onDeleteNote}
            />
          ))
        ) : (
          <p className={styles.noNotes}>No&nbsp;<span>notes</span>&nbsp;at the time {":("}</p>
        )}
      </ul>
    </div>
  );
}
