import React from 'react';
import { Fragment, useEffect, useState } from "react";
import { search } from "./api";


export default function App() {


  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('Lableb');


  useEffect(() => {

    search(query)
      .then(response => {
        console.log({ response });
        setResponse(response);
      })
      .catch(error => {
        console.log({ error });
        setError({ error: error.toString() });
      });

  }, [query]);


  return (
    <Fragment>
      <div>
        <span>Search</span>

        <input placeholder="Search..." value={query} onChange={event => setQuery(event.target.value)} />
      </div>

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

