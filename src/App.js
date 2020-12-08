import { Fragment, useEffect, useState } from "react";
import { indexDocuments } from "./api";


export default function App() {


  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);


  useEffect(() => {

    indexDocuments()
      .then(response => {
        console.log({ response });
        setResponse(response);
      })
      .catch(error => {
        console.log({ error });
        setError({ error: error.toString() });
      });

  }, []);


  return (
    <Fragment>
      <h1>Index Documents</h1>
      <p>{'Response:'}</p>
      <pre>
        {!error ? JSON.stringify(response, undefined, 2) : null}
      </pre>
      <pre>
        {error ? JSON.stringify(error, undefined, 2) : null}
      </pre>
    </Fragment>
  );
}

