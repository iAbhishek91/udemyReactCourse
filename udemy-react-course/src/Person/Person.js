import React, {Fragment} from 'react';

export default (props) => {
  return (
    <Fragment>
      <h5>
        i am a functional component with name
        :  {props.name}
      </h5>
      <p>{props.children}</p>
    </Fragment>
  );
}