import React from "react";

// reactstrap components
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

function WideCard() {
  return (
    <>
      <Card style={{height:"100vh"}} className=" bg-dark text-white border-0 hieght-50%" >
        <CardImg
          alt="..."
          src="/images/TeamWork.jpg"
        ></CardImg>
        <CardImgOverlay className=" d-flex align-items-center">
          <div>
            <CardTitle className=" h2 text-white mb-2">Our Services</CardTitle>
            <CardText>
              Got A Team to Work With ?
              Dont Worry Our Website will help You To Achive More With Your Team 

            </CardText>
            <CardText className=" text-sm font-weight-bold">
              Explore Our services DownBelow
            </CardText>
          </div>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export default WideCard;