import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} style={{ width: "18rem", border: "1px solid grey" }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
