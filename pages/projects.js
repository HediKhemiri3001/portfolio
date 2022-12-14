import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import avatar from "../public/avatar.png";
import defaultImg from "../public/default.png";
import pictureswipe from "../public/pictureswipe.png";
import empruntout from "../public/ET.png";
import equipment_management from "../public/equipment_management.png";
const PROJECTS = [
  {
    id: "pictureswipe",
    name: "PictureSwipe",
    thumbnail: pictureswipe,
    description:
      "A demo for an app enabling swipe user interaction to like or dislike photos.",
    repo: "https://github.com/HediKhemiri3001/tinder-clone",
  },
  {
    id: "empruntout",
    name: "Empruntout",
    thumbnail: empruntout,
    description:
      "Web platform enabling renting of all sorts of objects for day to day use.",
    repo: "https://github.com/NaimDali/Empruntout-Front",
  },
  {
    id: "equipment_management",
    name: "Equipment Management Platform",
    thumbnail: equipment_management,
    description:
      "Web platform enabling the management of different types of equipment to automate book keeping in a company.",
    repo: "https://gitlab.com/equipment-_managment/back",
  },
  {
    id: "peertopeer",
    name: "Peer to peer chat app.",
    thumbnail: defaultImg,
    description:
      "Development of both the front end and back end of a peer to peer chat app, using React Native, Express and more specifically Redis and Socket.Io ",
    repo: "https://github.com/HediKhemiri3001/Chat",
  },
];

export default function Projects() {
  return (
    <Layout title="Projects">
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {PROJECTS.map((project) => (
          <Section delay={0.1} key={project.id}>
            <WorkGridItem
              key={project.id}
              id={project.id}
              title={project.name}
              thumbnail={project.thumbnail}
              repo={project.repo}
            >
              {project.description}
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>
    </Layout>
  );
}
