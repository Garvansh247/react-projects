function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.props.children;
    for(const prop in reactElement.props){
        if(prop!=='children'){
            domElement.setAttribute(prop,reactElement.props[prop]);
        }
    }
    container.appendChild(domElement);
}


const mainContainer=document.getElementById('root');

const reactElement={
    type:'a',
    props:{
        children:'Hello, this is a custom React setup!',
        href:'https://www.google.com',
        target: '_blank'
    }
};

customRender(reactElement,mainContainer);