import React from 'react';

const MyComponent = React.memo(({ value }) => {
  console.log('my component is rerendering');
  return <div>Mycompenent{value}</div>;
});

export default MyComponent;
