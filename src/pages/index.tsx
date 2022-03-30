import type { NextPage } from 'next'
import Link from 'next/link'


const IndexPage: NextPage = () => {
  return (
      <>
        <Link href={"/login"}>Login</Link>
        <br />
        <Link href={"/register"}>register</Link>

      </>
    )
  }
  
  export default IndexPage