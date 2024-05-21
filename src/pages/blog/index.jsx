import React from 'react';
import { Layout } from '../../components';

export default function Blog() {
  return (
    <Layout>
      <main>
        <h1>Welcome to My Blog</h1>
      </main>
    </Layout>
  )
}

export const Head = () => <title>Brian Toon | Blog</title>
