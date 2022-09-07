import { useEffect, useState } from "react";
import { Container, Card, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  const params = useParams();

  const [movie, setMovie] = useState(null);
  const [comment, setComment] = useState(null);
  console.log("Params", params);

  useEffect(() => {
    const funzione = async () => {
      try {
        let response = await fetch(
          "http://www.omdbapi.com/?apikey=2652acf5&i=" + params.id
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setMovie(data);
        }
      } catch (e) {}
    };
    const getCommenti = async () =>{
        let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/" + params.id,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwOGViZGVkZDY3ODAwMTUwN2Q3MzUiLCJpYXQiOjE2NjIwMjk1MDEsImV4cCI6MTY2MzIzOTEwMX0.SM504i6mIQGhZLYsrRUxc6VHfvlIVuIZAxUaZ1XFEHM",
              },
            }
          );
          let dataC = await response.json();
          console.log(dataC)
    }
    funzione();
    getCommenti();
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        {
            movie &&<Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
             {movie.Plot}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Released : {movie.Released}</ListGroup.Item>
            <ListGroup.Item>Country : {movie.Country}</ListGroup.Item>
            <ListGroup.Item>Language : {movie.Language}</ListGroup.Item>
          </ListGroup>
        </Card>
        }
        
      </Row>
    </Container>
  );
};

export default MovieDetails;
