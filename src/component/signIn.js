import React from 'react';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import Middleware from '../store/middleware/middleware'

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        signInData: (obj) => dispatch(Middleware.signIn(obj))
        }
    };

class SignIn extends React.Component {

    signIn(ev) {
        ev.preventDefault();
        var obj = {
        userPass : this.refs.pass.getValue(),
        userEmail : this.refs.email.getValue()
        }
        this.props.signInData(obj);
    //     const auth = firebase.auth();
    //     const promise = auth.signInWithEmailAndPassword(obj.userEmail, obj.userPass);
    //     promise.then((user) => {
    //         console.log("signIn successfully");
    //         browserHistory.push('/Home');
    //     })
    //     promise.catch(e => console.log("ERROR:", e.message));
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
        return (
            <div>
               <center>
                 <Paper style={style} zDepth={1}>
                    
                    <form>
                    <h3>Sign In Form</h3>
                        <TextField hintText="Email" type="text" ref="email"/><br />
                        <br />
                        <TextField hintText="Password" type="password" ref="pass"/><br />
                        <br />
                        <RaisedButton onClick={this.signIn.bind(this) } label="Sign In" primary={true} style={sty} />
                        <Link to="SignUp"><RaisedButton label="Sign Up" primary={true} style={sty} /></Link>
                    </form>
                </Paper>
               </center>
            </div>
        );
    }
}

//export default SignIn;

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);