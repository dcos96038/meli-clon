import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
      body: {
        backgroundColor: "#ebebeb",
      },
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
  },
  colors: {
    primary: {
      ...theme.colors.yellow,
      500: "#fff159",
    },
  },
});
