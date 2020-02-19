import Head from 'next/head';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <title>ptts.</title>
      </Head>

      <div id="main">{props.children}</div>
      <footer></footer>
    </div>
  );
}
