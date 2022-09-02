import { Component } from "react";
import SingleGallery from "./SingleGallery";
import {Container} from 'react-bootstrap'


class MainGallery extends Component {
    render() {
        return(
            <Container fluid>
                 <SingleGallery title={"Che la forza sia con te !"}  segment="star%20wars" />
                 <SingleGallery title={"Tolkien Saga"}  segment="lord%20rings" />
                 <SingleGallery title={"Serata da Incubo"}  segment="nightmare" />
            </Container>
           
            
        )
    }
}

export default MainGallery;