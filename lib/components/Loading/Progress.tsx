import styled from "styled-components";

const ProgressLoading = styled.div<{ height?: number; width?: number }>`
  height: ${(props) => props.height || 4}px;
  width: ${(props) => props.width || 130}px;
  --c: no-repeat linear-gradient(#6100ee 0 0);
  background: var(--c), var(--c), #d7b8fc;
  background-size: 60% 100%;
  animation: l16 3s infinite;

  @keyframes l16 {
    0% {
      background-position:
        -150% 0,
        -150% 0;
    }
    66% {
      background-position:
        250% 0,
        -150% 0;
    }
    100% {
      background-position:
        250% 0,
        250% 0;
    }
  }
`;

export { ProgressLoading };
