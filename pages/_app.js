import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import { useEffect, useState } from "react";

const Fonts = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
  `}</style>
);
function Website({ Component, pageProps, router }) {
  /*const [scrollRestoration, setScrollRestoration] = useState("");
  useEffect(() => {
    typeof window !== "undefined" && setScrollRestoration("manual");
    window.history.scrollRestoration = scrollRestoration;
  }, []);*/
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default Website;
