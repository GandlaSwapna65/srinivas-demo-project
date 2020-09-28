
import React from 'react';
class Calcu extends React.Component {
    state = {
        a: 0,
        b: 0,

    };
    myAge = {

        age: 20
    };

    setA = (e) => {
        this.setState({
            a: parseInt(e.target.value),


        });
    };

    setB = (e) => {
        this.setState({
            b: parseInt(e.target.value),

        });
    };


    render() {

        {
            this.myAge = 20
            if (this.myAge = 20) {
                // alert('u r age is 18+');
            }
            else {

            }
        };
        const after = this.state.a + this.myAge;
        return (

            <div>
                <h5>Claculater:</h5>

                <input className="setA" onChange={this.setA} />

                <input className="setB" onChange={this.setB} />
                <button onClick={this.setShowResultTotrue}>Result</button>


                <br />
                { 'A value  : ' + (this.state.a)}  { 'B value : ' + (this.state.b)}
                < br />
                { 'Add:' + (this.state.a + this.state.b)}
                < br />
                { 'Sub  : ' + (this.state.a - this.state.b)}
                < br />
                { 'Mul  : ' + (this.state.a * this.state.b)}
                < br />
                { 'Div  :  ' + (this.state.a / this.state.b)}
                < br />
                { 'After 2030 age:' + (after)}
                < br />

            </div >

        );
    }
}
export default Calcu;