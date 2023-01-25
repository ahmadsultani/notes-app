import styles from "./NoteTitleInput.module.css";

export default function NoteTitleInput(props) {
  const { title, onTitleChange } = props;
  const charLeft = 150 - title.length;
  return (
    <div className={styles.container}>
      <p className={styles.charLeft}>Character left: {charLeft}</p>
      <input
        className={styles.input}
        placeholder="Enter your Note Title..."
        value={title}
        required={true}
        onChange={onTitleChange}
      />
    </div>
  );
}
