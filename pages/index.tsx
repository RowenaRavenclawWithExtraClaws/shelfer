import Head from "next/head";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shelfer</title>
        <meta name="description" content="Books and magazines finder" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Shelfer</h1>

        <p className={styles.description}>view books, magazines and more!</p>

        <div className={styles.grid}>
          <a href="/all" className={styles.card}>
            <h2>All</h2>
            <p>
              View list of books and magazines together sorted by their title
            </p>
          </a>

          <a href="/books-magazines" className={styles.card}>
            <h2>Books and magazines</h2>
            <p>View a list of books and a list of magazines</p>
          </a>

          <a href="/books" className={styles.card}>
            <h2>Books</h2>
            <p>
              View books and search for a book using ISBN number or by author's
              email
            </p>
          </a>

          <a href="/magazines" className={styles.card}>
            <h2>Magazines</h2>
            <p>
              View magazines and search for a magazine using ISBN number or by
              author's email
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
