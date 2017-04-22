import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import './style.css'
//import * as firebase from 'firebase';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import Middleware from '../store/middleware/middleware'

function mapStateToProps(state) {
  return {
    show_crime_report: state.MyReducer.show_crime_report,
    show_complaints_report: state.MyReducer.show_complaints_report,
    show_missing_report: state.MyReducer.show_missing_report
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showCrimeReport: () => dispatch(Middleware.showCrimeReport()),
    showComplaintsReport: () => dispatch(Middleware.showComplaintsReport()),
    showMissingReport: () => dispatch(Middleware.showMissingReport())
  }
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      arr: []
    };
  }

  componentDidMount() {
    this.props.showCrimeReport()
    this.props.showComplaintsReport()
    this.props.showMissingReport()
  }
  // componentwillMount() {
  //   this.state.arr.push(this.props.showReportData)
  //   this.setState({ arr: this.state.arr })
  // }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  handleClickCrimes() {
    this.setState({arr: this.props.show_crime_report})
  }
  handleClickComplaints() {
    this.setState({arr: this.props.show_complaints_report})
  }
  handleClickMissing() {
    this.setState({arr: this.props.show_missing_report})
  }

  render() {
    return (
      <div>
      <center><h2>Click on tabs to see the Reports</h2></center>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
          <Tab onClick={this.handleClickCrimes.bind(this) }label="Crimes Reports" value={0} />
          <Tab onClick={this.handleClickMissing.bind(this) }label="Complaints" value={1} />
          <Tab onClick={this.handleClickComplaints.bind(this) }label="Missing Persons" value={2} />
        </Tabs>
        <center>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          >
          <div>
            <h2 style={styles.headline}></h2>
            
            {this.state.arr.map((fullobj, index) => {
              
              return (
                <div className="divs" key={index}>
                  Title: {fullobj.title}<br />
                  Address: {fullobj.address}<br />
                  City: {fullobj.city}<br />
                  Detail: {fullobj.detail}<br />
                </div>
              )
            }
            ) }
            <br />
          </div>
          <div style={styles.slide}>
           
            {this.state.arr.map((fullobj, index) => {
              return (
                <div className="divs" key={index}>
                  Title: {fullobj.title}<br />
                  Address: {fullobj.address}<br />
                  City: {fullobj.city}<br />
                  Detail: {fullobj.detail}<br />
                </div>
              )
            }
            ) }
          </div>
          <div style={styles.slide}>
            
            {this.state.arr.map((fullobj, index) => {
              return (
                <div className="divs" key={index}>
                  Title: {fullobj.title}<br />
                  Address: {fullobj.address}<br />
                  City: {fullobj.city}<br />
                  Detail: {fullobj.detail}<br />
                </div>
              )
            }
            ) }
          </div>
        </SwipeableViews>
        </center>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabsExampleSwipeable);