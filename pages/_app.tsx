import "../styles/globals.css";
import "../styles/_preloader.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
