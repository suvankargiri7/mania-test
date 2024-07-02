import {Layout} from "react-grid-layout";

const homeLayoutService = () => {
    const layout: Array<Layout> = [
        { "i": "bank-draft", x: 0, y:0, w:4, h:5, isDraggable: true, isResizable: false}, 
        { "i": "bill-of-lading", x: 4, y:0, w:4, h:5, isDraggable: true, isResizable: false }, 
        {"i": "invoice", x: 8, y:0, w:4, h:5, isDraggable: true, isResizable: false}, 
        {"i": "bank-draft-2", x: 0, y:5, w:4, h:5, isDraggable: true, isResizable: false}, 
        {"i":"bill-of-lading-2", x: 4, y:5, w:4, h:5, isDraggable: true, isResizable: false}
    ]

    return layout;
}


export {
    homeLayoutService
}