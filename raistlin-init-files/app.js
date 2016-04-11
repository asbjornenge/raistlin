import React from 'react'
import ReactDOM from 'react-dom'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        I am the app! :heart:
      </div>
    )
  }
}

let container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(<App />, container)
