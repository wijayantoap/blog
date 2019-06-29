import Link from "next/link";
import Header from "../components/header";
import Content from "../components/Content";

export default () => (
  <main>
    <Header />
    <Content>
      <Link href="/about">
        <a>About this blog</a>
      </Link>
      <br/>
      <Link href="/helloworld">
        <a>Hello World</a>
      </Link>
    </Content>
    <style jsx>{`
    html, body
    {
        margin: 0px; padding: 0px
    }

    a {
      text-decoration: none;
      color: black;
      font-size: 24px;
      font-weight: 600;
    }
    `}</style>
  </main>
);