import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import avatar from "../public/avatar.png";

export default function Projects() {
  return (
    <Layout title="Projects">
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="pictureswipe"
            title="PictureSwipe"
            thumbnail={avatar}
          >
            A demo for an app enabling swipe user interaction to like or dislike
            photos.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="empruntout" title="Empruntout" thumbnail={avatar}>
            Web platform enabling renting of all sorts of objects for day to day
            use.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={avatar}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={avatar} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  );
}
