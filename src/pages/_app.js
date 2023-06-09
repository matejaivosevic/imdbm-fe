import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import confStore from "../store/configureStore";
import Layout from "../components/_App/Layout";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // Retreiving each page's props
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return {
      pageProps: pageProps,
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(confStore)(MyApp);
