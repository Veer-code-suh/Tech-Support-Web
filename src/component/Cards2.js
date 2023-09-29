import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Cards.css";
import ram from "../Images/Ram2.jpg";
import pro from "../Images/Pro2.jpg";
import ssd from "../Images/SSd2.jpg";
import hdd from "../Images/Hdd1.jpg";

function Cards() {
  return (
    <div className="card-container1">
      <div>
        <h2>Ram , Processor </h2>
        <h2>Ssd & Hard Disk </h2>
        <Link to="/components" className="link">
          <Button className="btn">Veiw All</Button>
        </Link>
      </div>
      <Link to="/ram" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={ram} />
          <Card.Body>
            <Card.Title>Ram</Card.Title>
            <Card.Text className="card-disc">Min. 30% off</Card.Text>
            <Link to="/ram" className="link">
              View More
            </Link>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/processor" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={pro} />
          <Card.Body>
            <Card.Title>Processor</Card.Title>
            <Card.Text className="card-disc">Min. 55% off</Card.Text>
            <Link to="/processor" className="link">
              View More
            </Link>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/ssd" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={ssd} />
          <Card.Body>
            <Card.Title>SSD</Card.Title>
            <Card.Text className="card-disc">Min. 35% off</Card.Text>
            <Link to="/ssd" className="link">
              View More
            </Link>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/ram" className="link">
        <Card className="cards">
          <Card.Img className="card-img" src={hdd} />
          <Card.Body>
            <Card.Title>Hard Disk</Card.Title>
            <Card.Text className="card-disc">Min. 20% off</Card.Text>
            <Link to="/ram" className="link">
              View More
            </Link>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Cards;
