import './form.scss';
import { useState } from 'react';

function Form(props) {
  const [url, setUrl] = useState('');
  const [requestData, setRequestData] = useState(null);
  const [method, setMethod] = useState('GET');

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method ? method : 'GET',
      url: url,
      body: JSON.parse(requestData),
    };
    props.setFormData(formData);
  }

  const handleSetUrl = e => {
    let { value } = e.target;
    setUrl(value);
  };

  const handleSetMethod = e => {
    let { id } = e.target;
    setMethod(id);
  };

  const handleSetRequest = e => {
    let { value } = e.target;
    setRequestData(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input onChange={handleSetUrl} name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label onClick={handleSetMethod} className="methods">
          <span id="GET" className={method === 'GET' ? 'active' : ''}>
            GET
          </span>
          <span id="POST" className={method === 'POST' ? 'active' : ''}>
            POST
          </span>
          <span id="PUT" className={method === 'PUT' ? 'active' : ''}>
            PUT
          </span>
          <span id="DELETE" className={method === 'DELETE' ? 'active' : ''}>
            DELETE
          </span>
        </label>
        <textarea onChange={handleSetRequest} />
      </form>
    </>
  );
}

export default Form;