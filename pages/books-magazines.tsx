import Head from "next/head";
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import CustomTable from "../components/customTable";
import FetchIndicator from "../components/fetchIndicator";
import styles from "../styles/Home.module.css";

const BooksMagazinesPage = () => {
  const [data, setData] = useState({ books: [], magazines: [] });

  useEffect(() => {
    fetch("https://csv-operator.herokuapp.com/books-magazines").then((res) =>
      res.json().then((body) => setData(body))
    );
  }, []);

  if (data.books.length === 0) return <FetchIndicator />;

  return (
    <div className={styles.container}>
      <Head>
        <title>Shelfer | books and magazines</title>
        <meta name="description" content="All the data" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Books and magazines</h1>

        <p className={styles.description}>
          View a list of books and a list of magazines
        </p>

        <Card>
          <CardBody>
            <CardTitle tag="h3">Books</CardTitle>
            <CustomTable data={data.books} />
          </CardBody>
        </Card>

        <Card style={{ marginTop: 20 }}>
          <CardBody>
            <CardTitle tag="h3">Magazines</CardTitle>
            <CustomTable data={data.magazines} />
          </CardBody>
        </Card>
      </main>
    </div>
  );
};

export default BooksMagazinesPage;
