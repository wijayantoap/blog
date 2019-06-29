import { Component } from 'react'
import Header from '../components/header'
// import Content from '../components/content'

class Error extends Component {
  render() {
    return (
      <main>
        <Header />
          <section className="content">
          <h1>Second post already?! WOW</h1>
          <p>in this post i just wanted to tell you a that there was an error when i tried to deploy this blog for the second time. what a joker! the logs aren't that helpful and i need to do quite an ugly fix within the code. and you know what is worst than an error? an error that you can't solve.</p>
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

export default Error
