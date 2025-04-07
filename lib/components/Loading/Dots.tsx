import styled from "styled-components";

const DotsLoading = styled.div<{ width?: number }>`
  width: ${(props) => props.width ?? 60}px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    20% {
      background-position:
        0% 0%,
        50% 50%,
        100% 50%;
    }
    40% {
      background-position:
        0% 100%,
        50% 0%,
        100% 50%;
    }
    60% {
      background-position:
        0% 50%,
        50% 100%,
        100% 0%;
    }
    80% {
      background-position:
        0% 50%,
        50% 50%,
        100% 100%;
    }
  }
`;

const DotsLoading2 = styled.div<{ width?: number }>`
  width: ${(props) => props.width ?? 35}px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background:
    var(--_g) 0 0,
    var(--_g) 100% 0,
    var(--_g) 100% 100%,
    var(--_g) 0 100%;
  background-size: 40% 40%;
  animation: l38 0.5s infinite;

  @keyframes l38 {
    100% {
      background-position:
        100% 0,
        100% 100%,
        0 100%,
        0 0;
    }
  }
`;

const DotsLoading3 = styled.div<{ width?: number }>`
  width: ${(props) => props.width ?? 50}px;
  aspect-ratio: 1;
  --c: no-repeat radial-gradient(farthest-side, #514b82 92%, #0000);
  background:
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 10px 10px;
  animation: l18 1s infinite;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: 3px;
    background: repeating-conic-gradient(#0000 0 35deg, #514b82 0 90deg);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 3px),
      #000 0
    );
    border-radius: 50%;
  }
  @keyframes l18 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;

export { DotsLoading, DotsLoading2, DotsLoading3 };
