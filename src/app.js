import { useState, useEffect, useReducer } from 'react';
import './app.scss';
import axios from 'axios';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

import History from './components/history/History';

function App(props) {
  const initialState = {
    data: {},
    formData: {},
    loading: false,
    arrCalls: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_DATA':
        return {
          ...state,
          data: { ...action.payload },
        };

      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: { ...action.payload },
        };
      case 'UPDATE_LOADING':
        return {
          ...state,
          loading: action.payload,
        };
      case 'UPDATE_HISTORY':
        return {
          ...state,
          arrCalls: [...state.arrCalls, action.payload],
        };
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  let loadingTrue = {
    type: 'UPDATE_LOADING',
    payload: true,
  };

  let loadingFalse = {
    type: 'UPDATE_LOADING',
    payload: false,
  };

  const callApi = formData => {
    axios({
      method: formData.method,
      url: formData.url,
      body: formData.body,
    })
      .then(response => {
        let action = {
          type: 'UPDATE_DATA',
          payload: response,
        };
        dispatch(action);
        dispatch(loadingFalse);
      })
      .catch(e => {
        console.log(e);
        dispatch(loadingFalse);
      });
  };

  useEffect(() => {
    dispatch(loadingTrue);

    if (state.formData.method) {
      callApi(state.formData);
      let history = {
        type: 'UPDATE_HISTORY',
        payload: state.formData,
      };

      dispatch(history);
    }
  }, [state.formData]);

  return (
    <>
      <Header />
      <div>Request Method: {state.formData.method}</div>
      <div>URL: {state.formData.url}</div>
      <Form setFormData={dispatch} />
      <History arrData={state.arrCalls} setFormData={dispatch} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
}

export default App;