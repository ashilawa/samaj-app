import React from "react";
import Card from "react-bootstrap/Card";
const Litrature = () => (
  <div className="body shadow-lg p-3 mb-5 bg-white rounded">
    <div className="link-to" id="litrature" />
    <div className="title">
      <img className="history" src={`/images/srm/literature.jpg`} alt="" />

      <Card className="text-center shadow-lg">
        <Card.Header className="map-card-header">
        चित्रपट
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <iframe
              src="https://www.youtube.com/embed/TYFr5oa5-5Q"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="600"
              height="400"
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center shadow-lg">
        <Card.Header className="map-card-header">
        संत रोहिदासांची आरती  
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <iframe
              src="https://www.youtube.com/embed/LaSJEX0drpM" 
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="600"
              height="400"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default Litrature;
