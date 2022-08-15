import { useState, useEffect } from 'react';
import './app.scss';
import axios from 'axios';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

function App(props) {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = formData => {
    console.log(formData);
    axios({
      method: formData.method,
      url: formData.url,
      body: formData.body,
    })
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
    console.log(data);
    setData(formData);
  };

  useEffect(() => {
    setLoading(true);
    callApi(formData);
  }, [formData]);



  return (
    <>
      <Header />
      <div>Request Method: {formData.method}</div>
      <div>URL: {formData.url}</div>
      <Form handleApiCall={callApi} setFormData={setFormData} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );

  }

export default App;