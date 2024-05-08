const mainContainer = document.querySelector('#root')

const recatElement = {
    type: 'a',
    props: {
        href: 'http://random.org',
        target: '_bleck'
    },
    children: `Click me to visit random.org`
}

function customRender(recatElement, container) {
    let domElement = document.createElement(recatElement.type)
    domElement.appendChild(document.createTextNode(recatElement.children))
    for (const prop in recatElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, recatElement.props[prop])
    }

    container.appendChild(domElement)
}

customRender(recatElement, mainContainer)