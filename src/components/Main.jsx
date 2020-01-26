import React, { useEffect, useState } from "react";
import { useFetch } from "react-async";
import App from "./App";

function Main(props) {
  const [apiURL, setApiURL] = useState("");

  const headers = { Accept: "application/json" };
  const options = { defer: false, promiseFn: fetchQuestions };

  useEffect(() => {
    if (
      props.gameOpts.difficulty &&
      props.gameOpts.numOfQuestions &&
      props.gameOpts.category
    ) {
      const fragment1 = "https://opentdb.com/api.php?amount=";
      const fragment2 = "&category=";
      const fragment3 = "&difficulty=";
      const fragment4 = "&type=multiple";
      const api_url =
        fragment1 +
        props.gameOpts.numOfQuestions +
        fragment2 +
        props.gameOpts.category +
        fragment3 +
        props.gameOpts.difficulty +
        fragment4;

      setApiURL(api_url);
    }
  }, [
    props.gameOpts.difficulty,
    props.gameOpts.numOfQuestions,
    props.gameOpts.category,
    apiURL
  ]);

  let fetchedQuestions = [];
  const { data, error, isLoading } = useFetch(apiURL, { headers }, options);
  if (isLoading) return "Loading...";
  if (error) {
    return `Something went wrong: ${error.message}`;
  }
  if (data) {
    fetchedQuestions = data.results;
    return (
      <>
        <App allQuestions={fetchedQuestions} />
      </>
    );
  }
}

const fetchQuestions = async ({ url }) =>
  await fetch({ url })
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

export default Main;
