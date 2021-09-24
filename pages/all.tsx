import Head from "next/head";
import { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import CustomTable from "../components/customTable";
import FetchIndicator from "../components/fetchIndicator";
import styles from "../styles/Home.module.css";

const AllPage = () => {
  const [data, setData] = useState({ all: [] });

  useEffect(() => {
    fetch("https://csv-operator.herokuapp.com/all").then((res) =>
      res.json().then((body) => setData(body))
    );
  }, []);

  if (data.all.length === 0) return <FetchIndicator />;

  return (
    <div className={styles.container}>
      <Head>
        <title>Shelfer | all</title>
        <meta name="description" content="All the data" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>All</h1>

        <p className={styles.description}>
          List of books and magazines together sorted by their title
        </p>

        <Card>
          <CardBody>
            <CustomTable data={data.all} />
          </CardBody>
        </Card>
      </main>
    </div>
  );
};

export default AllPage;
