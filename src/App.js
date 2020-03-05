import React from "react";
import ButtonRadius from "./Components/ButtonRadius";
import InputText from "./Components/InputText";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>My react App</h1>
                <div style={{display:'flex'}}>
                    <InputText label="Ime i prezime"/>
                    <InputText label="Email"/>
                </div>
              <div>
                <InputText />
              </div>
            </div>
        );
    }
}

export default App;
