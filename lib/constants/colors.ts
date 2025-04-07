export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "warn"
  | "danger"
  | "success";

export const colors: Record<
  Color,
  { bg: string; flat: string; text: string; border?: string }
> = {
  default: {
    bg: "bg-default",
    flat: "bg-default-flat",
    text: "text-default",
    border: "border-default",
  },
  primary: {
    bg: "bg-primary",
    flat: "bg-primary-flat",
    text: "text-primary",
    border: "border-primary",
  },
  secondary: {
    bg: "bg-secondary",
    flat: "bg-secondary-flat",
    text: "text-secondary",
    border: "border-secondary",
  },
  warn: {
    bg: "bg-warn",
    flat: "bg-warn-flat",
    text: "text-warn",
    border: "border-warn",
  },
  danger: {
    bg: "bg-danger",
    flat: "bg-danger-flat",
    text: "text-danger",
    border: "border-danger",
  },
  success: {
    bg: "bg-success",
    flat: "bg-success-flat",
    text: "text-success",
    border: "border-success",
  },
};
