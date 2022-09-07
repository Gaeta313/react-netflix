import { Component, useEffect, useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import SpinnerComponent from "./SpinnerComponent";
import { useNavigate } from "react-router-dom";

const SingleGallery = (props) => {
  const navigate = useNavigate()
  /* state = {
    data: null,
    loading: true,
    error: false,
  }; */

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /*  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=2652acf5&page=2&s=" + this.props.segment
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ data: data.Search, loading: false });
      }
    } catch (e) {
      this.setState({ loading: false, error: true });
    }
  }; */

  useEffect(() => {
    const funzione = async () => {
      try {
        let response = await fetch(
          "http://www.omdbapi.com/?apikey=2652acf5&page=2&s=" +
            props.segment
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setData(data.Search);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    funzione();
  }, []);

  return (
    <Container fluid>
      <h4 className="text-left my-5">{props.title}</h4>
      {loading && <SpinnerComponent />}
      {loading && error && (
        <Alert variant="danger">Si è verificato un errore</Alert>
      )}
      {data && !loading && !error && (
        <Carousel cols={6} rows={1} gap={10} loop scrollSnap>
          {data.map((film) => (
            <Carousel.Item className="effetto" key={film.imdbID}>
              <img
                className="img-fluid"
                style={{ height: "80%" }}
                src={film.Poster}
                alt="moviepicture"
              />
              <Button className="btn btn-danger mt-2" onClick={() => {
                navigate("/details/"+film.imdbID)
              }}>
                Details
              </Button>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default SingleGallery;
