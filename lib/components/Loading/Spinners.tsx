import styled from "styled-components";

const SpinnerLoading = styled.div<{
  width?: number;
  padding?: number;
  color?: string;
}>`
  width: ${(props) => props.width || 50}px;
  padding: ${(props) => props.padding || 8}px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(props) => props.color || "var(--color-primary)"};
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

const SpinnerLoading2 = styled.div<{ width?: number }>`
  width: ${(props) => props.width || 50}px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background:
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
  @keyframes l7 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;

export { SpinnerLoading, SpinnerLoading2 };
