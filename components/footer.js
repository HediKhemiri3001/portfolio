import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Khemiri Mohamed Hedi. All Rights
      Reserved. largely inspired by{" "}
      <Link href="https://github.com/craftzdog/craftzdog-homepage">
        craftzdog
      </Link>
    </Box>
  );
};

export default Footer;
