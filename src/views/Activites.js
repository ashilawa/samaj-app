import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Main from "../layouts/Main";
import { Card, ListGroup } from "react-bootstrap";
import Event from "../components/Activites/events";

const Activites = () => (
  <Main>
    <Helmet title="Activites" />

    <article className="post" id="activites">
      <header>
        <div className="title">
          <h2>
            <Link to="/activities">Activites</Link>
          </h2>
        </div>
      </header>

        <div className="container">
          <p>
            संस्थेच्या भरीव व उल्लेखनीय कामाची दखल घेऊन{" "}
            <strong>
              <span style={{ color: "#0073ff" }}>
                मनुष्य विकास लोकसेवा अकादमी
              </span>
            </strong>{" "}
            यांच्या वतीने{" "}
            <strong>
              <span style={{ color: "#ff0088" }}>
                ‘महाराष्ट्र गुणिजन रत्न गौरव पुरस्कार'
              </span>
            </strong>{" "}
            देऊन सन्मानित करण्यात आले संस्थेच्या सर्वांगीण विकास, प्रगतीसाठी
            कार्यकारी मंडळ अतोनात मेहनत घेत आहेत व संस्थेची प्रगतशील वाटचाल
            भविष्यात अशीच होत राहो अशी संत शिरोमणी संत रोहिदास महाराज चरणी
            प्रार्थना.
          </p>
        </div>
        <div className="container">
          <Card>
            <Card.Header className="card-header">
              सामाजिक बांधिलकी - संलग्न पंचायतीच्या माध्यमातून
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    समाजातील तरुणानं साठी विवाह जुळवणे, साखरपुडा, लग्न आदी शुभ
                    कार्याची देखरेख आणि व्यवस्था
                  </ListGroup.Item>
                  <ListGroup.Item>
                    समाज बांधवांच्या दुःखद (अंत विधी, तेरावं) कार्याची देखरेख
                    आणि व्यवस्था
                  </ListGroup.Item>
                  <ListGroup.Item>सार्वजनिक होळी उत्सव, श्रीकृष्ण जयंती</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          
        </div>
        <Event></Event>
     
    </article>
  </Main>
);

export default Activites;
