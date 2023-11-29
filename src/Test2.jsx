import React from 'react'
import { connect } from 'react-redux';
export  function Test2({count}) {
  return (
    <div><div>
    <p>Count in Test2: {count}</p>
  </div></div>
  )
}
const mapStateToProps = (state) => ({
    count: state.count,
  });
  
  export default connect(mapStateToProps)(Test2);