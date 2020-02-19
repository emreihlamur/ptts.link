import css from 'styled-jsx/css';

export default css`
  .patates {
    margin: 150px auto;
    display: block;
  }

  .rotate {
    animation: rotation 8s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
