import React from 'react';
import PropTypes from 'prop-types';
import "./database.css";

const MyComponent = ({ filters }) => {
    const { prodName, cityName, minQuant, maxQuant, minPrice, maxPrice } = filters;

    const tableData = [
        { pid: 'p01', pname: 'comb', city: 'Dallas', quantity: 111400, price: 0.5 },
        { pid: 'p02', pname: 'brush', city: 'Newark', quantity: 203000, price: 0.5 },
        { pid: 'p03', pname: 'razor', city: 'Duluth', quantity: 150600, price: 1 },
        { pid: 'p04', pname: 'pen', city: 'Duluth', quantity: 125300, price: 1 },
        { pid: 'p05', pname: 'pencil', city: 'Dallas', quantity: 221400, price: 1 },
        { pid: 'p06', pname: 'folder', city: 'Dallas', quantity: 123100, price: 2 },
        { pid: 'p07', pname: 'case', city: 'Newark', quantity: 100500, price: 1 }
    ];

    const filteredData = tableData.filter(item => {
        return (
            (prodName ? item.pname.includes(prodName) : true) &&
            (cityName ? item.city.includes(cityName) : true) &&
            (minQuant ? item.quantity >= parseInt(minQuant, 10) : true) &&
            (maxQuant ? item.quantity <= parseInt(maxQuant, 10) : true) &&
            (minPrice ? item.price >= parseFloat(minPrice) : true) &&
            (maxPrice ? item.price <= parseFloat(maxPrice) : true)
        );
    });

    return (
        <div>
            <h1 id='header'>Product List</h1>
            <table id='pTable'>
                <thead>
                    <tr>
                        <th className='tHeader'>PID</th>
                        <th className='tHeader'>Product Name</th>
                        <th className='tHeader'>City</th>
                        <th className='tHeader'>Quantity</th>
                        <th className='tHeader'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.pid}>
                            <td className='tInfo'>{item.pid}</td>
                            <td className='tInfo'>{item.pname}</td>
                            <td className='tInfo'>{item.city}</td>
                            <td className='tInfo'>{item.quantity}</td>
                            <td className='tInfo'>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};

MyComponent.propTypes = {
    filters: PropTypes.shape({
        prodName: PropTypes.string,
        cityName: PropTypes.string,
        minQuant: PropTypes.string,
        maxQuant: PropTypes.string,
        minPrice: PropTypes.string,
        maxPrice: PropTypes.string
    }).isRequired
};

export default MyComponent;
