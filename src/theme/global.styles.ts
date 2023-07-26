// const fontFamily = 'Lexend, Avenir, Helvetica, Arial, sans-serif';
// const fontFamily = 'Chivo, Avenir, Helvetica, Arial, sans-serif';
export const fontFamily = "Helvetica, Arial, sans-serif";
// const fontFamily = "Nunito Sans, Helvetica, Arial, sans-serif";

export const globalStyles = {
  "*": {
    boxSizing: "border-box !important",
  },
  "html,body": {
    fontFamily,
    color: "fg.700",
    background: "bg.0",
    userSelect: "none",
  },
  a: {
    color: "primary.600",
    textDecoration: "underline",
  },
  em: {
    color: "fg.500",
  },
};
