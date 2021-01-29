import React, { Component } from 'react';

class ResultNilai extends Component {

    constructor(props) {
        super(props)

        this.tempJawab = [];
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.jawaban.map((jawab) => {
                            if (jawab.hasil === "benar") {
                                return <li className="list-group-item bg-primary">jawaban soal{jawab.soal_no}{jawab.hasil}</li>
                            } else if (jawab.hasil === "salah") {
                                return <li className="list-group-item bg-danger">jawaban soal{jawab.soal_no}{jawab.hasil}</li>
                            }
                        })}
                </ul>
            </div>
        );
    }
}

export default ResultNilai;