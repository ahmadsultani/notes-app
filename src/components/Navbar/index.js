import Searchbar from '../Searchbar';

import styles from './Navbar.module.css';

export default function Navbar(props) {
  const { onSearch } = props;
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>Notes App</h2>
      <Searchbar onSearch={onSearch}/>
    </nav>
  )
}
