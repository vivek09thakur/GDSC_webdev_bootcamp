import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi guys! I am <span className="purple">Vivek Thakur </span>
            from <span className="purple">Bihar, India.</span> I am on the way to become a data scientist in future,I love to know more and more about Artificial Intelligence and Machine learning. Apart from programming, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading vedic books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Making sketches with pencil.
            </li>
            <li className="about-activity">
              <ImPointRight /> Clicking photos and capturing moments.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching and learning from movies/series.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Become so powerful that you only fear the god not his creation."
          </p>
    
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
