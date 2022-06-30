/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import React, { Component } from 'react';
import Layout from '../styles/components/Layout';
import Navbar from '../styles/components/Navbar';

const homeText = css`
  h1 {
    font-size: 50px;
    color: blue;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 62px;
      text-align: center;
      letter-spacing: 1px;
    }
  }
  img {
    height: 100px;
    width: auto;
    margin: 0px 5px;
    background-image: none;
  }
  @media screen and (min-width: 768px) {
    img {
      height: 200px;
      width: auto;
      margin: 0px 50px;
    }
  }
`;

const navBar = css`
  a {
    font-size: 40px;
    color: blue;
    align-items: center;
    justify-content: space-evenly;
  }
  nav {
    display: flex;
    text-align: center;
  }
`;

const wrapperStyle = css``;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MindOverMatter</title>
      </Head>
      <div css={homeText}>
        <h1>Here, where the Mind matters</h1>
        <div css={wrapperStyle}>
          <header></header>
        </div>
      </div>
    </Layout>
  );
}
