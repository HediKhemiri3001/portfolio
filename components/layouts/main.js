import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8"></meta>
        <meta name="description" content="Khemiri Mohamed Hedi's homepage" />
        <meta name="author" content="Khemiri Mohamed Hedi" />
        <meta name="author" content="Khemiri Mohamed Hedi" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Khemiri Mohamed Hedi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hedi.khe" />
        <meta name="twitter:creator" content="@hedi.khe" />
        <meta name="twitter:image" content="/avatar.png" />
        <meta property="og:site_name" content="Khemiri Mohamed Hedi" />
        <meta name="og:title" content="Khemiri Mohamed Hedi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/avatar.png" />
        <title>Khemiri Mohamed Hedi - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
