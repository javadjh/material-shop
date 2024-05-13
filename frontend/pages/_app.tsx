import { CacheProvider } from "@emotion/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import createCache from "@emotion/cache";
import { Theme } from "@mui/joy";
import { ThemeProvider, extendTheme } from "@mui/joy/styles";
import { prefixer } from "stylis";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    direction: "rtl",
  });

  const cacheRtl = createCache({
    key: "joyrtl",
    stylisPlugins: [prefixer],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
