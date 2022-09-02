import { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <Row className=" mt-5">
          <Col xs={6} className="offset-3 m-auto">
            <Row>
              <Col xs={12} className="offset- text-left mb-2">
                <i class="fa fa-facebook footer-icon"></i>
                <i class="fa fa-instagram footer-icon"></i>
                <i class="fa fa-twitter footer-icon"></i>
                <i class="fa fa-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4} lg={4}>
              <Col>
                <Row>
                  <Col xs={12} class=" footer-links">
                    <p>
                      <a href="a" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col >
                <Row >
                  <Col xs={12} className=" footer-links">
                    <p>
                      <a href="a" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col >
                <Row >
                  <Col xs={12} class=" footer-links">
                    <p>
                      <a href="a" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col >
                <Row >
                  <Col xs={12} class=" footer-links">
                    <p>
                      <a href="a" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="a" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row >
              <Col xs={12} className=" text-left mb-2">
                <button
                  type="button"
                  class="btn btn-sm footer-button rounded-0 mt-3 "
                >
                  Service Code
                </button>
              </Col>
            </Row>
            <div class="row">
              <div class="col col-12 text-left mb-2 mt-2 copyright">
                © 1997-2022 Netflix, Inc.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
