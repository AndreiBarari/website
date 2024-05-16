import { Container, Grid, Stack, Typography } from "@mui/material";
import desktop from "../assets/home-desktop.jpg";
import laptop from "../assets/home-laptop.jpg";
import tablet from "../assets/home-tablet.jpg";
import phone from "../assets/home-phone.jpg";
import { CtaButton } from "../components/homeComponents/CallToAction";

const homeContentStyles = {
  display: "inline-flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
};

const Home = () => {
  return (
    <div className="main-content home">
      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Grid item xs={6} sx={{ ...homeContentStyles, gap: "4rem" }}>
          <Stack
            sx={{
              backgroundColor: "#ffffff26",
              backdropFilter: "blur(5px)",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              width: "clamp(340px, 100%, 720px)",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" className="reveal">
              My name is Andrei,
            </Typography>
            <Typography variant="h3" className="reveal">
              I'm a web developer!
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              gap: "2rem",
              flexDirection: "row",
              padding: "0.5rem 1rem",
            }}
          >
            <CtaButton name="About Me" path="/about" />
            <CtaButton name="Contact" path="/contact" />
          </Stack>
        </Grid>
        <Grid item xs={6}>
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
