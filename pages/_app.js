import { Provider } from "react-redux";
import Head from "next/head";

import store from "../src/redux";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Head>
        <title>Pizza</title>
      </Head>
      <GlobalStyles />
    </Provider>
  );
}

export default MyApp;
