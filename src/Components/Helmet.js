import React from 'react'

const Helmet = (props) => {
  document.title = "Hetvi Food Web | " + props.title;
  return <div>{props.children}</div>;
};

export default Helmet