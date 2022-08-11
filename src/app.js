import React, {useState} from 'react';

import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import axios from 'axios';
export default function App() {
    const [data,
        setData] = useState(null);
    const [requestParams,
        setRequest] = useState({});
    const handleApiCall = async(requestParams) => {
        setRequest(requestParams);
        let methodCall = requestParams
            .method
            .toLowerCase();
        const response = await axios[methodCall](requestParams.url, (requestParams.body)
            ? (requestParams.body)
            : null);

        const result = {

            results: response.data
        };

        setData(result);
    }
    return (
        <React.Fragment>
            <Header/>
            <div>Request Method : {requestParams.method}</div>
            <div>URL : {requestParams.url}</div>
            <Form handleApiCall={handleApiCall}/>
            <Results data={data}/>
            <Footer/>

        </React.Fragment>
    );
}
