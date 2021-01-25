import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">{this.props.no}&nbsp;&nbsp;{this.props.soal}</label><br />
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        );
    }
}

export default TextArea;