import React from "react";
import { Card } from "react-bootstrap";
import img from "../../../img/rahman.jpg";

const About = () => {
  return (
    <div style={{ minHeight: "87vh" }} className=" ">
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <img
          style={{ width: "70px", marginBottom: "-30px", zIndex: "2" }}
          className="rounded-circle  border mt-5 border-2  border-dark"
          src={img}
          alt=""
        />
        <Card
          className="py-3 shadow"
          style={{ maxWidth: "35rem", zIndex: "1", backgroundColor: "white" }}
        >
          <Card.Body className="text-center">
            <Card.Title>MD Abdur Rahman</Card.Title>
            <Card.Text>
              আমার সপ্ন হলো এই দীর্ঘ ৫ মাস কে কাজে লাগিয়ে একটি কম্পানি তেরী করা । এখান থেকে আমার মতো
              আর ১০ জন কর্মসংস্থান গড়ে তুলা। এবং আমার গ্রামের মানুষের জন্য কিছু করা।
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
