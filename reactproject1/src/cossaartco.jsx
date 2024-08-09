import React, { useState } from 'react';
import './Cossaartco.css';
import Database from './database.jsx';

const Cossaartco = () => {
    const [prodName, setProdName] = useState('');
    const [cityName, setCityName] = useState('');
    const [minQuant, setMinQuant] = useState('');
    const [maxQuant, setMaxQuant] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [errorMsg, setErrorMsg] = useState({
        prodName: '',
        cityName: '',
        minQuant: '',
        maxQuant: '',
        minPrice: '',
        maxPrice: ''
    });

    const [mainHidden, setMainHidden] = useState(false);
    const [tableHidden, setTableHidden] = useState(true);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'productName':
                setProdName(value);
                break;
            case 'cityName':
                setCityName(value);
                break;
            case 'minQuantity':
                setMinQuant(value);
                break;
            case 'maxQuantity':
                setMaxQuant(value);
                break;
            case 'minPrice':
                setMinPrice(value);
                break;
            case 'maxPrice':
                setMaxPrice(value);
                break;
            default:
                break;
        }
    };
    const handleReturnBtn = () => {
        setMainHidden(false);
        setTableHidden(true);
    }

    const handleClearBtn = () => {
        setProdName('');
        setCityName('');
        setMaxPrice('');
        setMinPrice('');
        setMaxQuant('');
        setMinQuant('');
        setErrorMsg({
            prodName: '',
            cityName: '',
            minQuant: '',
            maxQuant: '',
            minPrice: '',
            maxPrice: ''
        });
    };

    const submitValues = () => {
        let valid = true;
        const pattern = /^[a-zA-Z ]*$/;
        const newErrorMsg = { ...errorMsg };

        if (isNaN(minQuant) && minQuant !== '') {
            newErrorMsg.minQuant = 'Must be a number';
            valid = false;
        } else {
            newErrorMsg.minQuant = '';
        }

        if (isNaN(maxQuant) && maxQuant !== '') {
            newErrorMsg.maxQuant = 'Must be a number';
            valid = false;
        } else {
            newErrorMsg.maxQuant = '';
        }

        if (isNaN(minPrice) && minPrice !== '') {
            newErrorMsg.minPrice = 'Must be a number';
            valid = false;
        } else {
            newErrorMsg.minPrice = '';
        }

        if (isNaN(maxPrice) && maxPrice !== '') {
            newErrorMsg.maxPrice = 'Must be a number';
            valid = false;
        } else {
            newErrorMsg.maxPrice = '';
        }

        if (!pattern.test(prodName)) {
            newErrorMsg.prodName = 'Must be a substring containing no numbers';
            valid = false;
        } else {
            newErrorMsg.prodName = '';
        }

        if (!pattern.test(cityName)) {
            newErrorMsg.cityName = 'Must be a string containing no numbers';
            valid = false;
        } else {
            newErrorMsg.cityName = '';
        }

        setErrorMsg(newErrorMsg);

        if (valid) {
            setMainHidden(true);
            setTableHidden(false);
        }
    };

    return (
        <div className="reset_style">
            <div id="main" hidden={mainHidden}>
                <div id="header">
                    <h1>Cossaart Company - Retail Suppliers</h1>
                    <h2>Product search</h2>
                    <small>Click &quot;Search Products&quot; w/o any inputs to see full table</small>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <label htmlFor="productName">Product Name<i>(i.e. pen, pencil, razor)</i></label>
                                <input id="productName" type="text"
                                    name="productName"
                                    value={prodName}
                                    onChange={handleInputChange}>
                                </input>
                                <div className="errorMsg">{errorMsg.prodName}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label htmlFor="cityName"> Warehouse City<i>(i.e. Duluth, Dallas, Newark)</i></label>
                                <input id="cityName" type="text"
                                    name="cityName"
                                    value={cityName}
                                    onChange={handleInputChange}>
                                </input>
                                <div className="errorMsg">{errorMsg.cityName}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="minQuantity">Minimum Quantity</label>
                                <input id="minQuantity" type="text" name="minQuantity"
                                    value={minQuant}
                                    onChange={handleInputChange}>
                                </input>
                                <div className="errorMsg">{errorMsg.minQuant}</div>
                            </td>
                            <td>
                                <label htmlFor="maxQuantity">Maximum Quantity</label>
                                <input id="maxQuantity" type="text" name="maxQuantity"
                                    value={maxQuant}
                                    onChange={handleInputChange}>
                                </input>
                                <div className="errorMsg">{errorMsg.maxQuant}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="minPrice">&nbsp;&nbsp;&nbsp;&nbsp;Minimum Price&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input id="minPrice" type="text" name="minPrice"
                                    value={minPrice}
                                    onChange={handleInputChange}>
                                </input>
                                <div className="errorMsg">{errorMsg.minPrice}</div>
                            </td>
                            <td>
                                <label htmlFor="maxPrice">&nbsp;&nbsp;&nbsp;&nbsp;Maximum Price&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input id="maxPrice" type="text" name="maxPrice"
                                    value={maxPrice}
                                    onChange={handleInputChange}>
                                </input>
                                <div className="errorMsg">{errorMsg.maxPrice}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" id="clearFormButton" onClick={handleClearBtn}
                                    value="Clear Form"></input>
                            </td>
                            <td>
                                <input type="submit" value="Search Products" id="searchProductsButton" onClick={submitValues}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="search" hidden={tableHidden}>
                <Database filters={{ prodName, cityName, minQuant, maxQuant, minPrice, maxPrice }} />
                <input type="button" id="returnBtn" value="Go back" onClick={handleReturnBtn }></input>
            </div>
        </div>
    );
};

export default Cossaartco;
