import { Component } from 'react'
import Header from '../components/header'
import Content from '../components/content'

class AboutPage extends Component {
  render() {
    return (
      <main>
        <Header />
          <Content>
          <h1>About this blog</h1>
          <p>Okay it seems that I decided to rewrite my blog using this something2 framework and i just wanna try figuring things out. anyway i might go back in using yadayada for some reason. well the progress seems a little bit off the schedule 
            (yes yes you are right, i have no actual schedule to make this). welp i guess that is that</p>
          </Content>
      </main>
    )
  }
}

export default AboutPage
