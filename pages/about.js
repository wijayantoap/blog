import { Component } from 'react'
import Header from '../components/header'
// import Content from '../components/content'

class AboutPage extends Component {
  render() {
    return (
      <main>
        <Header />
          <section className="content">
          <h1>About this blog</h1>
          <p>Okay it seems that I decided to rewrite my blog using this something2 framework and i just wanna try figuring things out. anyway i might go back in using yadayada for some reason. well the progress seems a little bit off the schedule 
            (yes yes you are right, i have no actual schedule to make this). welp i guess that is that</p>
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

export default AboutPage
