import Link from "next/link";
import Header from "../components/header";
// import Content from "../components/Content";

export default () => (
  <main>
    <Header />
    <section className="content">
      <Link href="/asdf">
        <a>Pinned Post</a>
      </Link>
      <br />
      <Link href="/error">
        <a>Another post</a>
      </Link>
      <br/>
      <Link href="/about">
        <a>About this blog</a>
      </Link>
      <br/>
      <Link href="/helloworld">
        <a>Hello World</a>
      </Link>
    </section>
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
    .content {
      padding: 2.5rem 0;
      margin-left: auto;
      margin-right: auto;
      width: 580px;
      font-family: Times New Roman, Times, serif;
      font-size: 20px;
      text-align: justify;
      line-height: 35px;
    }

    @media only screen and (max-width: 56.25em) {
        .content {
            width: 80%;
        }
    `}</style>
  </main>
);