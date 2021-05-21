import { OmitProps } from "antd/lib/transfer/ListBody";
import React from "react";

// reactstrap components
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

function Card2(props) {
  return (
    <>
      <div className=" card-deck">
        <Card >
          <CardImg
          
            alt="..."
            src="images/chat.png"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Chating </CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
             
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="images/download.png"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Video meeting</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <CardText>
              
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="images/screen_share.png"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Sharing screen</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <CardText>
              <small className=" text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        
      </div>
    </>
  );
}
export default Card2;