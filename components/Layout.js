import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>FuckPrize</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>

    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout
