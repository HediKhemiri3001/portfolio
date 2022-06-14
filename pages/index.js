import {
  Container,
  Box,
  useColorModeValue,
  Heading,
  chakra,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Head from "next/head";
import Image from "next/image";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import styles from "../styles/Home.module.css";
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          marginTop={8}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m an engineering student and avid developer based in
          Tunisia 🇹🇳 !
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mohamed Hedi Khemiri
            </Heading>
            <p>Technology Enthousiast , Developer 👨‍💻.</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/avatar.png"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Introduction
          </Heading>
          <Paragraph>
            Khemiri Mohamed Hedi is a young engineering student at the National
            Institute of Applied Sciences and Technology, better known as INSAT.
            Motivated and passionate about technology, he builds cool stuff and
            hopes to do so for a living.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                color="white"
                bgGradient="linear-gradient(90deg, rgba(3,3,249,1) 0%, rgba(27,74,237,0.9206233518798144) 24%, rgba(19,89,208,1) 44%, rgba(13,99,187,1) 65%, rgba(1,120,144,1) 100%);"
                _hover={{
                  bgGradient:
                    "linear-gradient(90deg, rgba(2,2,210,1) 0%, rgba(24,65,207,0.9206233518798144) 24%, rgba(18,79,183,1) 44%, rgba(13,99,187,1) 65%, rgba(1,92,110,1) 100%);",
                }}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>Born in Alaine, Abu Dhabi 🇦🇪. Raised and
            educated in Tunis, Tunisia 🇹🇳.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Obtained Baccalaureate with disctinction.
          </BioSection>
          <BioSection>
            <BioYear>Now</BioYear>Studying computer engineering at INSAT.
          </BioSection>
        </Section>
      </Container>
    </Layout>
  );
}
