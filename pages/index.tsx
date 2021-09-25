import Head from "next/head";
import Link from "next/link";
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
          <Link href="/all">
            <div className={styles.card}>
              <h2>All</h2>
              <p>
                View list of books and magazines together sorted by their title
              </p>
            </div>
          </Link>

          <Link href="/books-magazines">
            <div className={styles.card}>
              <h2>Books and magazines</h2>
              <p>View a list of books and a list of magazines</p>
            </div>
          </Link>

          <Link href="/books">
            <div className={styles.card}>
              <h2>Books</h2>
              <p>
                View books and search for a book using ISBN number or by
                author's email &apos;
              </p>
            </div>
          </Link>

          <Link href="/magazines">
            <div className={styles.card}>
              <h2>Magazines</h2>
              <p>
                View magazines and search for a magazine using ISBN number or by
                author's email &apos;
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
