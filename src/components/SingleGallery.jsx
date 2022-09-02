import { Component } from "react";
import { Alert, Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import SpinnerComponent from "./SpinnerComponent";


class SingleGallery extends Component {
  state = {
    data: null,
    loading: true,
    error: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2652acf5&page=2&s=" + this.props.segment
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ data: data.Search, loading:false });
      }
    } catch (e) {
       this.setState({ loading:false, error:true });
    }
  };

  render() {
    return (
      <Container fluid>
        <h4 className="text-left my-5">{this.props.title}</h4>
        {this.state.loading && <SpinnerComponent />}
        {this.state.loading && this.state.error &&
        <Alert variant="danger">
        Si è verificato un errore
      </Alert>}
        {this.state.data && !this.state.loading && !this.state.error && (
          <Carousel cols={6} rows={1} gap={10} loop scrollSnap>
            {this.state.data.map((film) => (
              <Carousel.Item className="effetto" key={film.imdbId}>
                <img
                  className="img-fluid h-100"
                  src={film.Poster}
                  alt="moviepicture"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    );
  }
}

export default SingleGallery;


