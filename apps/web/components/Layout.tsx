import Head from 'next/head';

const Layout = (props: any) => (
  <>
    <Head>
      <title>Layout</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <div className='container'>{props.children}</div>
    </main>
  </>
);

export default Layout;