import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import Layout from "./layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
