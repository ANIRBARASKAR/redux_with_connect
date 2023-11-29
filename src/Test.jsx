import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';
export  function Test({ count, increment, decrement }) {



  return (
    <div>Test
    <br />
    <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    count: state.count,
  });
  
  const mapDispatchToProps = {
    increment,
    decrement,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Test);
