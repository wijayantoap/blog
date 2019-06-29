import { Component } from 'react'
import Header from '../components/header'
import Content from '../components/Content'

class HelloWorld extends Component {
  render() {
    return (
      <main>
        <Header />
        <Content>
          <h1>This is my first blog post</h1>
          <p>As always, it is a Hello World post :)</p>
        </Content>
      </main>
    )
  }
}

export default HelloWorld
