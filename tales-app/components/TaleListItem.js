import React        from 'react'

export default class TaleListItem extends React.Component {
    render() {
        let classes = this.props.selected ? 'selected' : ''
        return (
            <li className={'TaleListItem '+classes} onClick={this.props.onClick}>
                {this.props.tale.name}
            </li>
        )
    }
}
