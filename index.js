import { validarId } from './validaciones.js';

const url = 'https://fakestoreapi.com/products'

let [, , method, resource, ...params] = process.argv;
method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == 'GET' && resource == 'products') {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

if (method == 'GET' && resource.startsWith('products/')) {

    const id = Number(resource.split('/')[1]);
    
    if (validarId(id)) { 
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        console.log(data);
    } else {
        console.log('ID invalido, no se pudo ejecutar la petición.');
    }
}

if (method == 'POST' && resource == 'products') {

    const [title, price, category] = params;

    const product = {
        title,
        price,
        category
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    const data = await response.json();
    console.log(data);
}

if (method == 'DELETE' && resource.startsWith('products/')) {

    const id = Number(resource.split('/')[1]);

    if (validarId(id)) {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json();
        console.log(data);
        
    } else {
        console.log('ID invalido, no se pudo ejecutar la petición.');
    }
}

/// Adicional modificar producto

if (method == 'PUT' && resource.startsWith('products/')) {

    const id = Number(resource.split('/')[1]);

    if (validarId(id)) {

        const [title, price, category] = params;

        const product = {
            title,
            price,
            category
        };

        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        console.log(data);
  
    } else {
        console.log('ID invalido, no se pudo ejecutar la petición.');
    }
}