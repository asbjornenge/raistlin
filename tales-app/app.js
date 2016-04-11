import React from 'react'
import ReactDOM from 'react-dom'
import * as tales from './tales'

console.log('root tales', tales)

class Tales extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tales : []
    }
  }
  render() {
    let _tales = this.state.tales.map(t => {
      return <li key={t.name}>{t.name}</li>
    })
    return (
      <div className="Tales">
        <h1>Tales Bitches</h1>
        <ul>{_tales}</ul>
      </div>
    )
  }
  pickTales() {
    let _tales = []
    for (let tale in tales) {
      let render = tales[tale]
      if (typeof render == 'function') {
        _tales.push({
          name: tale, // TODO: Normalize name
          render: tales[tale]
        })
      }
    }
    this.setState({ tales: _tales })
  }
  componentDidMount() {
    this.pickTales()
  }
}

ReactDOM.render(<Tales />, document.querySelector('#tales')) 
