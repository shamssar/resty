'use strict';

import './history.scss';

function History(props) {
  const handleClick = e => {
    let { id } = e.target;
    let raw = props.arrData[id];
    const action = {
      type: 'UPDATE_FORM_DATA',
      payload: raw,
    };
    props.setFormData(action);
  };
  let info = props.arrData[0];
  return (
    <aside className="history">
      <ul>
        {props.arrData.map((singleItem, idx) => (
          <li key={idx}>
            <label>{singleItem.method}</label>{' '}
            <button id={idx} onClick={handleClick}>
              {singleItem.url}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default History;