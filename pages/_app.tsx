import { AppProps } from "next/app";
import Head from "next/head";
import { Global, MantineProvider } from "@mantine/core";


export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet"/>
        <title>Spider Chart หลักเกณฑ์การประเมินโครงการฯ</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      {/* <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Kanit',
            src: `url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap')`,
            fontStyle: 'normal',
          },
        },
      ]}
      /> */}
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: 'Kanit',
          colorScheme: "light",
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },         
        }}>
        <Component {...pageProps} />
      </MantineProvider>
    </> 
  );
};
