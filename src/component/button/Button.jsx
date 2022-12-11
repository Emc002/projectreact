import react from 'react';

const button = (props) => {
  return(
    <button class="btn btn-secondary" onClick={props.fungsi}>{props.namaFungsi}</button>
  );
};

export default button;

