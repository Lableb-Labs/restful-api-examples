import React from 'react';
import { Fragment, useEffect, useState } from "react";
import { recommend } from "./api";


export default function App() {


  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);


  useEffect(() => {

    recommend()
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
      <div>
        <span>Recommendations</span>
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

