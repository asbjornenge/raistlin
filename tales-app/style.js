
export default 
`
    body {
        margin: 0;
    }

    .Tales .content {
        display: flex;
        height: 100%;
    }
    
    .Tales .content .render {
        padding: 32px;
        width: 100%;
    }

    .TaleList {
        padding: 32px;
        margin: 0;
        width: 256px;
        font-family: courier;
    }

    .TaleList h1 {
        margin: 0;
        margin-bottom: 8px;
        font-family: cursive;
    }

    .TaleListItem {
        border-bottom: 1px solid lightgray;
        list-style-type: none;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 8px;
        padding-right: 4px;
    }
    
    .TaleListItem.selected {
        background: beige;
        font-weight: bold;
    }

    .TaleListItem:hover {
        background: beige;
        cursor: pointer;
    }
`
