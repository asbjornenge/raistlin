import React            from 'react'
import ReactDOM         from 'react-dom'
import changeCase       from 'change-case'
import * as _tales      from './../tales'
import TaleList         from './components/TaleList'
import css              from './style'

class Tales extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tales : [],
            selected: null
        }
    }
    componentDidMount() {
        this.pickTales()
    }
    pickTales() {
        let tales = []
        for (let tale in _tales) {
            let render = _tales[tale]
            if (typeof render == 'function') {
                tales.push({
                    name: changeCase.titleCase(tale), 
                    render: render
                })
            }
        }
        this.setState({ tales: tales })
    }
    render() {
        return (
            <div className='Tales'>
                <style>{css}</style>
                <div className='content'>
                    <TaleList tales={this.state.tales} selected={this.state.selected} onSelected={(tale) => this.setState({selected: tale})} />
                    <div className='render'>
                        {
                            this.state.selected && 
                            this.state.selected.render() 
                        }
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Tales />, document.querySelector('#tales')) 
