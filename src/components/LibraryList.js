import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
   render() {
      console.log(this.props);
      return;
   }
}

const mapStateToProps = state => {
   return { libraries: state.libraries };
};

//calls the function connect(), which returns a function that calls LibraryList
export default connect(mapStateToProps)(LibraryList);
