import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = { jawaban: [] }
    }

    eventHandler = (event) => {
        console.log(event);
        console.log(event.target.checked);
        if (event.target.checked) {
            this.addDataJawaban(event.target.value);
        }

    }

    addDataJawaban = (nilai) => {
        let jawab = this.state.jawaban;
        jawab.push(nilai);
        this.setState({ jawaban: jawab })

        console.log(this.state.jawaban);

    }

    removeDataJawaban = () => {

    }
    render() {
        return (
            <div>
                <label>{this.props.no}.&nbsp;&nbsp;{this.props.data.soal}</label><br />
                {this.props.data.option.map((options, i) => {
                    return <div class="form-check">
                        <input class="form-check-input" type="checkbox" id={"soal" + this.props.no} name={"soal" + this.props.no} value={options} onChange={this.eventHandler} />
                        <label class="form-check-label" for="defaultCheck1">{options}</label>
                    </div>

                })}
            </div>
        );
    }
}

export default CheckBox;