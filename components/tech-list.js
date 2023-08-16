import { Stack, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Emoji from "./emoji";
import Paragraph from "./paragraph";

const DEVTECH = [
  "React",
  "NextJS",
  "NestJS",
  "Springboot",
  "GraphQL",
  "REST Apis",
];

const DEVOPSTECH = [
  "Docker",
  "Terraform",
  "Kubernetes",
  "Ansible",
  "Vagrant",
  "AWS",
];
export function TechList() {
  return (
    <Stack>
      <Stack flexDirection={"row"} width={"100%"}>
        <Stack flexDirection={"column"} width={"50%"}>
          <Heading as={"h4"} variant={"column-title"}>
            Dev 👨‍💻
          </Heading>
          {DEVTECH.map((element) => (
            <TechElement key={element}>{element}</TechElement>
          ))}
        </Stack>
        <Stack flexDirection={"column"}>
          <Heading as={"h4"} variant={"column-title"}>
            DevOps ⚙️ and Cloud ☁️
          </Heading>
          {DEVOPSTECH.map((element) => (
            <TechElement key={element}>{element}</TechElement>
          ))}
        </Stack>
      </Stack>
      <Paragraph>
        Currently working on using these technologies in projects together and
        writing medium articles about them, thus showing the level of
        comprehension. <b>Check out the blog section for more details.</b>
      </Paragraph>
    </Stack>
  );
}
const TechElement = styled("p")(() => ({
  lineHeight: 1,
  fontWeight: 400,
}));
