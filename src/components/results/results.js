import React from 'react';
import './results.scss';
import ReactJson from 'react-json-prettify';

function Results(props) {
  return (
    <section>
      {props.loading ? (
        <h1>Loading In Progress</h1>
      ) : (
        <>
          <pre>
            <label>"Headers" : </label>
            {props.data ? <ReactJson json={props.data.headers} /> : null}
          </pre>
          <pre data-testid="data">
            <label>"Response" : </label>
            {props.data ? <ReactJson json={props.data.data} /> : null}
          </pre>
        </>
      )}
    </section>
  );
}

export default Results;