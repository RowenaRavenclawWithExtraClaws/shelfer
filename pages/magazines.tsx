import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import CustomTable from "../components/customTable";
import FetchIndicator from "../components/fetchIndicator";
import styles from "../styles/Home.module.css";

const MagazinesPage = () => {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("https://csv-operator.herokuapp.com/magazines").then((res) =>
      res.json().then((body) => setData(body))
    );
  }, []);

  if (data.items.length === 0) return <FetchIndicator />;

  return (
    <div className={styles.container}>
      <Head>
        <title>Shelfer | magazines</title>
        <meta name="description" content="All books data" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Magazines</h1>

        <p className={styles.description}>
          View magazines and search for a magazine using ISBN number or by
          author's email
        </p>

        <Card>
          <CardBody>
            <CardTitle>
              <Row>
                <Col lg="6">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>ISBN</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Enter magazine ISBN" />
                    <InputGroupAddon addonType="append">
                      <Button color="primary">Search</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col lg="6">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Author</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Enter magazine author" />
                    <InputGroupAddon addonType="append">
                      <Button color="primary">Search</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </CardTitle>
            <CustomTable data={data.items} />
          </CardBody>
        </Card>
      </main>
    </div>
  );
};

export default MagazinesPage;
