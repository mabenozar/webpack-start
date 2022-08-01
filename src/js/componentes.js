import '../css/componentes.css';


export const saludar =  () => {
    
    const h1 = document.createElement('h1');
    h1.innerText = 'Hello World';
    document.body.append( h1 );


}
