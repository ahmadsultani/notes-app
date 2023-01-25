import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  const { onSearch } = props;
  return (
    <input
      className={styles.input}
      placeholder="Search"
      onChange={(event) => onSearch(event)}
    />
  );
}
