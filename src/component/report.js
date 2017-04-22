import React from 'react';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import Middleware from '../store/middleware/middleware'

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        crimeReportData: (obj) => dispatch(Middleware.crimeReportData(obj)),
        missingReportData: (obj) => dispatch(Middleware.missingReportData(obj)),
        complaintReportData: (obj) => dispatch(Middleware.complaintReportData(obj))
    }
};


class Report extends React.Component {

    constructor(props) {
        super();
        this.state = {
            value: ""
        }
    }

    handleChange = (event, index, value) => this.setState({ value });

    handleClick(ev) {
        ev.preventDefault();
        var obj = {
            city: this.refs.city.getValue(),
            address: this.refs.address.getValue(),
            title: this.refs.title.getValue(),
            detail: this.refs.detail.getValue()
        }
        var report = this.state.value
        if (report === "crime") { this.props.crimeReportData(obj) }

        if (report === "missing") { this.props.missingReportData(obj) }

        if (report === "complaint") { this.props.complaintReportData(obj) }
    }


    render() {
        const style = {
            height: 600,
            width: 600,
            margin: 30,
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
                            <h3>File a Report</h3>
                            <SelectField
                                floatingLabelText="Report Type"
                                value={this.state.value}
                                onChange={this.handleChange}
                                ref="reportType"
                                >
                                <MenuItem value="crime" primaryText="crime" />
                                <MenuItem value="missing" primaryText="missing" />
                                <MenuItem value="complaint" primaryText="complaint" />
                            </SelectField>
                            <br />
                            <TextField hintText="City name" type="text" ref="city"/><br />
                            <br />
                            <TextField hintText="Address" type="text" ref="address"/><br />
                            <br />
                            <TextField hintText="Title" type="text" ref="title"/><br />
                            <br />
                            <TextField hintText="Detail" type="text" ref="detail"/><br />
                            <br />
                            <Link to="Home"><RaisedButton label="Cancel" primary={true} style={sty} /></Link>
                            <RaisedButton onClick={this.handleClick.bind(this) } label="Save" primary={true} style={sty} />
                        </form>
                    </Paper>
                </center>
            </div>
        );
    }
}

//export default Report;

export default connect(mapStateToProps, mapDispatchToProps)(Report);