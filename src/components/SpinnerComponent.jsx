import { Component } from "react";
import {Spinner} from 'react-bootstrap'


class SpinnerComponent extends Component {
    render(){
        return(
            <Spinner animation="border" variant="danger" />
        )
    }
}

export default SpinnerComponent;