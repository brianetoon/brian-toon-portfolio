import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout, Hero, About, Projects, Contact } from '../components';
import '../sass/main.scss';

export default function Home({ data }) {
  const projects = data.projects.nodes;

  return (
    <Layout>
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Contact />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    projects: allMarkdownRemark(
      filter: {frontmatter: {featured: {eq: true}}}
      sort: {frontmatter: {position: ASC}}
    ) {
      nodes {
        id
        html
        frontmatter {
          external
          github
          position
          tech
          title
        }
      }
    }
  }
`
