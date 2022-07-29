import axios from "axios";


export const digitalCurrenciesGet = async () => {
    return await axios.get('https://api.coincap.io/v2/assets');
}

export const digitalCurrencyGet = async (id) => {
    return await axios.get(`https://api.coincap.io/v2/assets/${id}`)
}

