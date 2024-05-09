import { Container, Grid, Stack, Typography } from "@mui/material";
import desktop from "../assets/home-desktop.jpg";
import laptop from "../assets/home-laptop.jpg";
import tablet from "../assets/home-tablet.jpg";
import phone from "../assets/home-phone.jpg";
import {
  AboutButton,
  ContactButton,
} from "../components/homeComponents/CallToAction";

const homeContentStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Home = () => {
  return (
    <div className="main-content home">
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        <Grid item xs={6} sx={homeContentStyles}>
          <Typography variant="h2">Web Developer</Typography>
          <Typography
            my="2rem"
            fontSize="1.2rem"
            sx={{
              background: "#ffffff26",
              backdropFilter: "blur(5px)",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            sunt voluptatum ipsam quod quia, laudantium ad facilis maiores odio,
            aut voluptatibus dolor rem quam. Ratione magni impedit quos
            reiciendis ut. Praesentium recusandae hic distinctio ad laborum
            voluptas nulla est voluptatibus expedita vitae placeat suscipit
            quasi nemo quibusdam enim, dicta obcaecati optio vero fugit! Ducimus
            blanditiis magnam excepturi molestiae culpa facere.
          </Typography>
          <Stack sx={{ display: "flex", gap: "2rem", flexDirection: "row" }}>
            <AboutButton />
            <ContactButton />
          </Stack>
        </Grid>
        <Grid item xs={6} sx={homeContentStyles}>
          <div class="diamond-grid">
            <div></div>
            <img src={desktop} alt="" class="diamond-grid__item" />
            <div></div>
            <img src={tablet} alt="" class="diamond-grid__item" />
            <div></div>
            <img src={laptop} alt="" class="diamond-grid__item" />
            <div></div>
            <img src={phone} alt="" class="diamond-grid__item" />
            <div></div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
