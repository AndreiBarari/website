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

const customBackground = {
  display: "inline-flex",
  backgroundColor: "#ffffff26",
  backdropFilter: "blur(5px)",
  padding: "0.5rem 1rem",
  borderRadius: "10px",
  width: "clamp(340px, 100%, auto)",

  "@media (max-width: 980px)": {
    textAlign: "center",
    margin: "0 auto",
  },
};

const customText = {
  textWrap: "pretty",
  fontSize: "1.1rem",
  fontWeight: 600,
};
const customTitle = {
  fontSize: "2.4rem",
  fontWeight: 600,

  "@media (max-width: 440px)": {
    fontSize: "1.8rem",
  },
};
const Home = () => {
  return (
    <div className="main-content home">
      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Grid item xs={6} sx={{ ...homeContentStyles, gap: "2rem" }}>
          <Stack sx={customBackground}>
            <Typography variant="h3" sx={customTitle} className="reveal">
              My name is Andrei,
            </Typography>
            <Typography variant="h3" sx={customTitle} className="reveal">
              I'm a web developer!
            </Typography>
          </Stack>
          <Stack sx={customBackground}>
            <Typography variant="body1" sx={customText} className="reveal">
              I specialize in user-firendly web development.
            </Typography>
            <Typography variant="body1" sx={customText} className="reveal">
              I create modern, responsive and performant websites.
            </Typography>

            <Typography variant="body1" sx={customText} className="reveal">
              I transform ideas into digital solutions.
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              gap: "1rem",
              flexDirection: "row",
              "@media (max-width: 980px)": {
                margin: "0 auto",
              },
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
