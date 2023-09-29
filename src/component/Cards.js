import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Cards.css";

import laptop1 from "../Images/laptop2.jpg";
import computer1 from "../Images/Computer2.jpg";
import Barebone from "../Images/Barebone.jpg";
import moniter1 from "../Images/Moniter1.jpg";

function Cards() {
  return (
    <div className="card-container1">
      <div>
        <h2>Laptop, Moniter </h2>
        <h2>Barebone </h2>
        <h2>& Computer</h2>
        <Link to="/devices" className="link">
          <Button className="btn">Veiw All</Button>
        </Link>
      </div>
      <Link to="/laptop" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={laptop1} />
          <Card.Body>
            <Card.Title>Laptop</Card.Title>
            <Card.Text className="card-disc">Min. 50% off</Card.Text>
            <Link to="/laptop" className="link">
              View more
            </Link>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/computer" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={computer1} />
          <Card.Body>
            <Card.Title>Computer</Card.Title>
            <Card.Text className="card-disc">Min. 40% off</Card.Text>
            <Link to="/computer" className="link">
              View More
            </Link>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/moniter" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={moniter1} />
          <Card.Body>
            <Card.Title>Moniter</Card.Title>
            <Card.Text className="card-disc">Min. 25% off</Card.Text>
            <Link to="/moniter" className="link">
              View More
            </Link>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/barebone" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={Barebone} />
          <Card.Body>
            <Card.Title>Barebone</Card.Title>
            <Card.Text className="card-disc">Min. 30% off</Card.Text>
            <Link to="/barebone" className="link">
              View More
            </Link>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Cards;
