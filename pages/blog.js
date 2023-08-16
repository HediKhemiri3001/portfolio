import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Heading, SimpleGrid, Center } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";

const ARTICLES = [];

export default function Blog() {
  return (
    <Layout title="Blog">
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Articles
        </Heading>
      </Section>
      {ARTICLES.length === 0 ? (
        <Center>Coming Soon.</Center>
      ) : (
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {ARTICLES.map((project) => (
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
      )}
    </Layout>
  );
}
