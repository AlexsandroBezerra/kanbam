import styles from "../styles/components/Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Kanban App</h1>
      </div>
    </header>
  );
}
