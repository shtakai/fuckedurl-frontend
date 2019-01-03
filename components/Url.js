import Link from 'next/link'

const Url = (props) => (
  <div>
    <h2>URL</h2>
    <Link href={props.url}><a>{props.url}</a></Link>
  </div>
)

export default Url

