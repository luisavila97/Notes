import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>📚 Notes</h1>
      <p>Here's a place to write what you feel like</p>
    </div>
  );
};

export default Header;
