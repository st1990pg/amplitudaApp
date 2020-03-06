import React from "react";
import ContactUs from "./Page/Home/ContactUs";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/*<h1>My react App</h1>*/}
                <ContactUs />
            </div>
        );
    }
}

export default App;
