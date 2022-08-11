import './form.scss';
import { useState } from 'react';

function Form(props) {
  const [url, setUrl] = useState();
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState();
  const handleMethod = (event) => {
    let elems = document.querySelectorAll('span');
    elems.forEach(elem => elem.style.backgroundColor = "rgb(175, 176, 182)");
    document.getElementById(`${event.target.id}`).style.backgroundColor = "white";
    setMethod(event.target.id);
  }
  const handleBody = (event) => {
    event.preventDefault();
    let newBody = event.target.value;
    setBody(newBody);
  }
  const handleURL = (event) => {
    event.preventDefault();
    let newURL = event.target.value;
    setUrl(newURL);
  }
  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: null
    };
    if (body) formData.body = body;
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="formG"><label >
      <label for="methods">Choose a method:</label>

<select id="methods">
  <option value="GET">GET</option>
  <option value="POST">POST</option>
  <option value="DELETE">DELETE</option>
  <option value="UPDATE">UPDATE</option>
</select>
        <input name='url' type='text' onChange={handleURL} />
          <button type="submit"> {method} </button>
        </label>
        </div>

      
      </form>
    </>
  );

} 
     

export default Form;