/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  font-size: 20px;
`;

const navStyles = css`
  font-size: 20px; ;
`;

const iconStyles = css`
  color: aqua; ;
`;

export default function Footer() {
  return (
    <Footer css={footerStyles}>
      <div css={navStyles}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About us</a>
        </Link>
        <Link href="/">
          <a>Help</a>
        </Link>
        <Link href="/">
          <a>Profile</a>
        </Link>
      </div>
      <div css={iconStyles}>
        <a href="https://github.com/LoooserWith3o">
          <img src="/public/img/github.jpg" alt="Github Logo" />
        </a>
        <a href="https://www.linkedin.com/in/chris-tokic-0b6273211/">
          <img src="/public/img/linkedin.jpg" alt="LinkedIn Logo" />
        </a>
        <a href="https://www.instagram.com/christok1c_/">
          <img src="/public/img/insta.jpg" alt="Instagramm Logo" />
        </a>
      </div>
    </Footer>
  );
}
