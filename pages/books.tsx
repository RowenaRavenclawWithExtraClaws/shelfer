import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import CustomTable from "../components/customTable";
import FetchIndicator from "../components/fetchIndicator";
import styles from "../styles/Home.module.css";

const BooksPage = () => {
  const [data, setData] = useState({ items: [] });
  const [fetching, toggleFetching] = useState(true);
  const isbnInputEl = useRef<HTMLInputElement>(null);
  const authorInputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("https://csv-operator.herokuapp.com/books").then((res) =>
      res.json().then((body) => {
        setData(body);
        toggleFetching(false);
      })
    );
  }, []);

  const searchItems = (word: string, itemType: string, searchType: string) => {
    if (word.length) {
      fetch(
        `https://csv-operator.herokuapp.com/${itemType}?${searchType}=${word}`
      ).then((res) => res.json().then((body) => setData(body)));
    }
  };

  if (fetching) return <FetchIndicator />;

  return (
    <div className={styles.container}>
      <Head>
        <title>Shelfer | books</title>
        <meta name="description" content="All books data" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Books</h1>

        <p className={styles.description}>
          View books and search for a book using ISBN number or by author's
          email &apos;
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
                    <input ref={isbnInputEl} placeholder="Enter book ISBN" />
                    <InputGroupAddon addonType="append">
                      <Button
                        color="primary"
                        onClick={() =>
                          searchItems(
                            isbnInputEl.current?.value as string,
                            "books",
                            "isbn"
                          )
                        }
                      >
                        Search
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col lg="6">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Author</InputGroupText>
                    </InputGroupAddon>
                    <input
                      ref={authorInputEl}
                      placeholder="Enter book author"
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        color="primary"
                        onClick={() =>
                          searchItems(
                            authorInputEl.current?.value as string,
                            "books",
                            "author"
                          )
                        }
                      >
                        Search
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </CardTitle>
            {data.items.length !== 0 ? (
              <CustomTable data={data.items} />
            ) : (
              <h3>There is no books!</h3>
            )}
          </CardBody>
        </Card>
      </main>
    </div>
  );
};

export default BooksPage;
