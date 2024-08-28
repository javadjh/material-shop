import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import createCache from "@emotion/cache";
import { Theme } from "@mui/joy";
import { ThemeProvider, extendTheme } from "@mui/joy/styles";
import { prefixer } from "stylis";
import "swiper/css";
import "jalaali-react-date-picker/lib/styles/index.css";
import "../styles/globals.css";
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
