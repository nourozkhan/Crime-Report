import React from 'react';
//import * as firebase from 'firebase';
//import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
//import Action from '../store/actions/action';
import Middleware from '../store/middleware/middleware'

function mapStateToProps(state) {
    return {
        data: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
            signUpData:(obj) =>dispatch(Middleware.signUp(obj))
        }
    };

class SignUp extends React.Component {

    signUp(ev) {
        console.log("obj");
        ev.preventDefault();
        var obj = {
            email: this.refs.email.getValue(),
            pass : this.refs.pass.getValue(),
            error : this.refs.demo
        }
        console.log(obj);
        this.props.signUpData(obj);
        // const auth = firebase.auth();
        // const promise = auth.createUserWithEmailAndPassword(email, pass);
        // promise.then((user) => {
        //     console.log({ email } + "your account is created");
        //     browserHistory.replace('/');
        // })
        // promise.catch(e => error.innerHTML = e.message);
        // firebase.auth().onAuthStateChanged(firebaseUser => {
        //     if (firebaseUser) {
        //         console.log(firebaseUser);
        //     }
        //     else {
        //         console.log('not logged in');
        //     }
        // });
    }
    render() {
        const style = {
            height: 300,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        const sty = {
            margin: 12,
        };
        console.log(this.props.data)
        return (
            <div>
                <center>
                 <Paper style={style} zDepth={1}>
                    
                    <form>
                    <h3>Sign up Form</h3>{this.props.data}
                        <TextField hintText="Email" type="text" ref="email"/><br />
                        <br />
                        <TextField hintText="Password" type="password" ref="pass"/><br />
                        <br />
                        <RaisedButton onClick={this.signUp.bind(this) } label="Sign Up" primary={true} style={sty} />
                    </form>
                </Paper>
               </center>
            </div>
        );
    }
}

//export default SignUp;
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);