import React, { useState, useEffect } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("token");
        console.log("token: " + token);
        const response = await fetch("postgres://tune_talk_user:WpfPaFxhqDgwK9j012wcQqgnBZq6MIzZ@dpg-cpahv1m3e1ms739q90bg-a.ohio-postgres.render.com/tune_talk:3000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("data is,", data);
          setUser(data.user);
        } else {
          throw new Error("Failed to fetch user");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <Container style={{ maxwidth: "400px" }}>
        <Card
          style={{
            maxwidth: "250px",
            background: "none",
            stroke: "none",
            padding: "15px",
          }}
        >
          <h1>Welcome {user.name} </h1>
          <h3>User Information</h3>
          <Card.Img
            style={{
              borderRadius: "50%",
              justifyContent: "center",
              maxWidth: "45px",
            }}
            src=".../../../images/profilepic.png"
            alt="profile picture"
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Title>{user.email}</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Profile;
