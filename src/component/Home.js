import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
//import Action from '../store/actions/action';
import Middleware from '../store/middleware/middleware'
import { browserHistory, Link } from 'react-router';
import * as firebase from 'firebase';
import './style.css';
import Data from '../container/data'
import TabsExampleSwipeable from '../container/tabs'

function mapStateToProps(state) {
    return {
        counting: state,
    show_crime_report: state.MyReducer.show_crime_report,
    show_complaints_report: state.MyReducer.show_complaints_report,
    show_missing_report: state.MyReducer.show_missing_report
    };
}

function mapDispatchToProps(dispatch) {
    return {
            signOut:(obj) =>dispatch(Middleware.signOut(obj))
        }
    };

class Home extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }
    
      componentWillMount() {
              firebase.auth().onAuthStateChanged((user) => {

            if (user) {
               console.log("user is authenticate")
            } else {
                browserHistory.push('/');
            }
        });
      }


    signOut(){
        this.props.signOut()
    }

    render() {
        const sty = {
            margin: 12,
        };

        return (
            <div>
                <div id="signOut">
                    <RaisedButton onClick={this.signOut.bind(this)} label="Sign out" primary={true} style={sty} />
                </div>
                <Data counting={this.props.counting}/>
                    <Link to="/report"><RaisedButton label="File a Report" primary={true} style={sty} /></Link>
                <TabsExampleSwipeable />
                
            </div>
        );
    }
}

//export default Home;
export default connect(mapStateToProps,mapDispatchToProps)(Home);