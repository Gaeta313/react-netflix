import { Component } from "react";
import Carousel from "better-react-carousel";

class Film extends Component {
    render() {
        return(
            <Carousel.Item className="effetto">
            <img
              className="img-fluid h-100"
              src={this.props.film.Poster}
              alt="moviepicture"
            />
          </Carousel.Item>
        )
    }
}

export default Film;