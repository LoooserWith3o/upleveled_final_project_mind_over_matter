/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>MindOverMatter</title>
      </Head>
      <Footer />
    </div>
  );
}
