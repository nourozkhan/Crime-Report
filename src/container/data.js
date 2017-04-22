import React from 'react';
import './style.css';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCrime: 0,
      missingPerson: 0,
      complaint: 0
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      totalCrime: nextProps.counting.MyReducer.show_crime_report.length,
      missingPerson: nextProps.counting.MyReducer.show_complaints_report.length,
      complaint: nextProps.counting.MyReducer.show_missing_report.length 
      })
  }
  render() {
    
    return (

      <div>
        <center>
          <span id="crimes">
            <p >TOTAL CRIMES</p>
            {this.state.totalCrime}
          </span>
          <span id="missing">
            <p>MISSING PERSONS</p>
            {this.state.missingPerson}
          </span>
          <span id="complaint">
            <p>COMPLAINT</p>
            {this.state.complaint}
          </span>
        </center>
      </div>
    );
  }
}

export default Data;