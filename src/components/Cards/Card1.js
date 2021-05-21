import { OmitProps } from "antd/lib/transfer/ListBody";
import React from "react";

// reactstrap components
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

function Card1(props) {
  return (
    <>
      <div className=" card-deck">
        <Card >
          <CardImg
          
            alt="..."
            src="images/whiteboard.png"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>White board</CardTitle>
            <CardText>
               whiteboard feature takes collaboration to the next level with an integrated board chat that allows both you and your participants to draw, erase, and place shapes into a completely virtual notepad right in your online meeting room.
                It’s an immersive team collaboration tool perfect for project planning, and more.
            </CardText>
            <CardText>
              
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="images/text_editor.png"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Text edtior</CardTitle>
            <CardText>
               text editor that allows real-time,collaborative text editing.
                 start sharing and co-editing your documents,
            </CardText>
            <CardText>
           
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src="images/codearea.png"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>Coding area</CardTitle>
            <CardText>
            online real-time collaborative code editor and compiler. 
            Our web-based application allows users to collaborate in real-time over the internet
            </CardText>
            <CardText>
          
            </CardText>
          </CardBody>
        </Card>
        
      </div>
    </>
  );
}
export default Card1;