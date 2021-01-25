import React, { Component } from 'react';

class RadioButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <label>{this.props.no}&nbsp;&nbsp;{this.props.data.soal}</label><br />
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={"soal" + this.props.no} id={"soal" + this.props.no} value="option1" />
                    <label className="form-check-label" for={"soal" + this.props.no}>{this.props.data.a}</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={"soal" + this.props.no} id={"soal" + this.props.no} value="option1" />
                    <label className="form-check-label" for={"soal" + this.props.no}>{this.props.data.b}</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={"soal" + this.props.no} id={"soal" + this.props.no} value="option1" />
                    <label className="form-check-label" for={"soal" + this.props.no}>{this.props.data.c}</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={"soal" + this.props.no} id={"soal" + this.props.no} value="option1" />
                    <label className="form-check-label" for={"soal" + this.props.no}>{this.props.data.d}</label>
                </div>
            </div>
        );
    }
}

export default RadioButton;