import styles from "./NoteTitleInput.module.css";

export default function NoteTitleInput(props) {
  const { title, onTitleChange, charLeft } = props;
  return (
    <div className={styles.container}>
      <p className={styles.charLeft}>Character left: {charLeft}</p>
      <input
        className={styles.input}
        placeholder="Enter your Note Title..."
        value={title}
        required={true}
        onChange={(event) => onTitleChange(event)}
      />
    </div>
  );
}
