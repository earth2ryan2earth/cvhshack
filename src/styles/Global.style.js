import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }


  /* Base Styles */
  *, *::before, *::after {
    font-family: 'Poiret One', cursive;
    font-weight: normal;
    font-size: 1rem;
    user-select: none;
  }

  html {
    background-color: #010214;
    scroll-behavior: smooth;
    width: 100%;
    scroll-padding-top: 5rem;
  }

  body {
    overflow-x: hidden;
    position: relative;
    text-align: center;
    margin: 0;
  }

  h2 {
    font-weight: 900;
    color: #c62368;
    font-size: 2rem;
    line-height: 1.3;
  }

  a, a:any-link {
    text-decoration: none;
  }

  .clr-white {
    color: #fff;
  }

  /* Screen Reader Accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
    border: 0;
  }

  /* Focused Styles */

  .flex {
    display: flex;
    gap: var(--gap, 1rem);
  }

  .info, .about, .officers {
    padding: 3rem 4rem;

    @media (min-width: 56.25em) {
      padding: 3rem 20%;
    }
  }
`;
