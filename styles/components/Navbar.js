import { useState } from 'react';

export default function Navbar() {
  const [style, setStyle] = useState('navbar1');
  const changeClass = (e) => {
    if (style == 'navbar1') {
      setStyle('navbar_change');
    } else if (style == 'navbar_change') {
      setStyle('navbar1');
    }
  };
  return (
    <>
      <div className="navbar">
        <div className={style}>
          <div className="navbar2">
            <a className="navbar3" href="/">
              Home
            </a>
          </div>
          <div className="navbar4">
            <a className="navbar3" href="/about">
              About
            </a>
            <a className="navbar3" href="/contact">
              Contact
            </a>
            <a className="navbar3" href="/privacy-policy">
              Privacy
            </a>
          </div>
        </div>
        <div onClick={changeClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
