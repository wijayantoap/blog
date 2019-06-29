import { Component } from 'react'
import Header from '../components/header'
// import Content from '../components/Content'

class HelloWorld extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="content">
          <h1>This is my first blog post</h1>
          <p>As always, it is a Hello World post :)</p>
        </section>
        <style jsx>{`
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
    )
  }
}

export default HelloWorld
