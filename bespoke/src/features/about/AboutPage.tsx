import { Container, Typography, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="left"
        p={4}
        flexDirection="column"
      >
        <Box textAlign="left" width="100%">
          <Typography variant="h4" component="div" align="center" gutterBottom>
            ABOUT US
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            A Tailor-Made Journey: Your Bespoke Story Begins Here
          </Typography>
          <Typography paragraph>
            Sartorial Master has woven a tapestry of experience for over 35
            years, meticulously crafting within Dubai's prestigious luxury
            bespoke fashion houses. It all began at respected semi-government
            institution, meticulously crafting various defense suits. Those
            demanding environments instilled in us an unwavering commitment to
            precision and quality – a foundation that has shaped every stitch
            we've sewn since.
            <br />
            Fast forward to today, and we're brimming with a wealth of knowledge
            and a rapport built with a discerning international clientele, we're
            ready to step onto the global stage.
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            Unleash Your Inner Fashion Icon with Unmatched Customization:
          </Typography>
          <Typography paragraph>
            Forget the limitations of off-the-rack clothing. A bespoke suit
            becomes an extension of you, a reflection of your personality that
            walks and talks with confidence. We're talking about a level of
            customization that puts others to shame. From meticulously selecting
            top-notch Italian fabrics renowned for their luxurious feel and
            impeccable drape, to hand-tailoring each piece to your exact
            specifications, we create a garment that's as unique as you are.
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            More Than Just a Suit, It's a Statement Piece:
          </Typography>
          <Typography paragraph>
            Our passion lies in transforming premium materials into
            show-stopping garments that elevate your personal style. Imagine a
            suit that feels as luxurious as it looks, a timeless piece that
            transcends mere clothing and becomes a treasured expression of you.
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            Quality You Crave, Price You Love:
          </Typography>
          <Typography paragraph>
            Look, we understand the allure of Savile Row tailoring and the
            prestige of Italian textiles. But here's the thing: you deserve that
            same level of meticulous attention to detail and premium materials,
            without breaking the bank. That's the beauty of bespoke tailoring
            with us.
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            A Dedication to Bespoke Brilliance:
          </Typography>
          <Typography paragraph>
            Drawing inspiration from the rich heritage of Savile Row, we're
            dedicated to exceeding expectations and delivering bespoke
            brilliance that rivals the best and world’s finest tailors. At
            Sartorial Master we see fabric not as material, but as a canvas for
            your story. We're not just tailors; we're are artist crafting every
            stitch with unwavering commitment to precision, quality that
            reflects not just the latest trends, but your exceptional style
            tale, a testament to your personality.
          </Typography>
          <Typography variant="h6" align="left" gutterBottom>
            Are You Ready for a Suit Worthy of a Scots Journal Mention?
          </Typography>
          <Typography paragraph>
            Contact us today and discover the difference that premium tailoring
            with a personal touch can make. Let's craft a masterpiece together,
            elevating your sartorial experience. We can't wait to collaborate
            and bring your sartorial vision to life!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
