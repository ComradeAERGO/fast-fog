import Layout from '../components/Layout';
import { Provider } from "react-redux";
import store from "../store/store";

function Web({ Component, pageProps }: any) {
  return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  );
}

export default Web;
