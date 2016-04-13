import React            from 'react'
import TaleListItem     from './TaleListItem'

export default class TaleList extends React.Component {
    render() {
        let tales = this.props.tales.map(tale => {
            return <TaleListItem tale={tale} 
                                 selected={this.props.selected === tale} 
                                 onClick={this.props.onSelected.bind(this, tale)} 
                                 key={tale.name} />
        })
        return (
            <ul className="TaleList">
                <h1>Tales</h1>
                {tales}
            </ul>
        )
    }
}
