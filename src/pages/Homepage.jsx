import React from "react";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";

const HomePage = () => {
  return (
    <Container>
      <h1>
        <HomeIcon color="primary" />
        &nbsp; Home Page
      </h1>
      <h3>Elixir website</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        dignissimos numquam officiis a vero cumque incidunt soluta officia. Sint
        facilis accusantium blanditiis sequi exercitationem commodi sit ducimus
        perspiciatis quasi deleniti.
      </p>
    </Container>
  );
};

export default HomePage;
