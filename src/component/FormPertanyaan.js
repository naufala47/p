

import React, { Component } from 'react'
import TextArea from './TextArea';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import ResultNilai from './ResultNilai';
import { withRouter } from 'react-router-dom';

class FormPertanyaan extends Component {

    constructor(props) {
        super(props);
        this.state = { jawabanSoal: [], score: 0, hasilJawabanSoal: [], dataSoal: [] }

        // this.contohData = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

        // let xData = this.contohData.filter((dummy) => {
        //   if (dummy === "a") {
        //     return "ahmad";
        //   }
        // })

        // console.log(xData)
    }
    // loopUntilDead(from, time) {
    //     for (let i = 0; i < time; i++) {
    //         // console.log(from + "" + time)

    //     }
    //     return from + "done"
    // }

    //promise buat bisa scroll ngapa2in saat sedang render
    componentDidMount() {
        // console.log("mounting phase")
        // let getDataHttp = new Promise((resolve, reject) => {
        //   setTimeout(() => { resolve("get data http selesai") }, 5000)
        // })

        // getDataHttp.then(hasilGetData => console.log(hasilGetData)).catch(error => console.log(error))
        this.props.updateLinkStatus(["", "", "disabled", ""]);
        fetch("http://localhost:6969/quiz?type=" + this.props.match.params.type)
            .then(response => response.json())
            .then(data => {
                this.setState({ dataSoal: data })
                // console.log(data)
            });


    }

    componentDidUpdate() {
        console.log("update phase")
    }
    componentWillUnmount() {
        console.log("un-mounting phase")
        // alert("un-mounting phase")
    }
    addJawaban = (jawaban) => {
        let newJawaban = this.state.jawabanSoal.filter((value) => { return value.soal_no !== jawaban.soal_no })

        newJawaban.push(jawaban);


        // console.log("isi new jawaban" + JSON.stringify(newJawaban));

        let hasilJawaban = this.kalkulasiNilai(newJawaban);
        console.log(hasilJawaban);
        hasilJawaban.sort((a, b) => a.soal_no - b.soal_no)
        this.setState({ jawabanSoal: newJawaban, hasilJawabanSoal: hasilJawaban });
    }

    kalkulasiNilai = (jawaban) => {
        let tempHasilJawab = [];
        let booleanJawab = "";
        jawaban.map((jawab) => {
            //perubahan
            switch (this.state.dataSoal[jawab.soal_no - 1].type) {

                case "radio":
                case "essay":

                    if (jawab.jawaban === this.state.dataSoal[jawab.soal_no - 1].kunci) {
                        booleanJawab = "benar"
                    } else {
                        booleanJawab = "salah"
                    }
                    break;

                case "checkbox":
                    if (this.equalsIgnoreOrder(jawab.jawaban, this.state.dataSoal[jawab.soal_no - 1].kunci)) {
                        booleanJawab = "benar"

                    } else {
                        booleanJawab = "salah"
                    }
                    break;

            }
            tempHasilJawab.push({
                "soal_no": jawab.soal_no,
                "hasil": booleanJawab
            })
            booleanJawab = "";
        })

        return tempHasilJawab;
    }

    equalsIgnoreOrder = (a, b) => {
        if (a.length !== b.length) return false;
        const uniqueValues = new Set([...a, ...b]);
        for (const v of uniqueValues) {
            const aCount = a.filter(e => e === v).length;
            const bCount = b.filter(e => e === v).length;
            if (aCount !== bCount) return false;
        }
        return true;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <form>
                            {
                                //perubahan
                                this.state.dataSoal.map((nilai, i) => {
                                    if (nilai.type === "essay") {
                                        return <TextArea soal={nilai.soal} no={i + 1} funcJawab={this.addJawaban} />
                                    } else if (nilai.type === "radio") {
                                        return <RadioButton data={nilai} no={i + 1} funcJawab={this.addJawaban} />
                                    } else if (nilai.type === "checkbox") {
                                        return <CheckBox data={nilai} no={i + 1} funcJawab={this.addJawaban} />
                                    }
                                })
                            }
                        </form >
                    </div >
                    <div className="col">
                        <div className="sticky-top">
                            <ResultNilai jawaban={this.state.hasilJawabanSoal} />
                            {/* <p>Isi Jawaban = {JSON.stringify(this.state.hasilJawabanSoal)}</p> */}
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(FormPertanyaan);
