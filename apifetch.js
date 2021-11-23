const express = require('express')
const routes = express.Router()
const pt = require('periodic-table')

routes.get('/get_all_elements', async (req, res) => {
    const apifetchs = pt.elements
    res.json(apifetchs)
})

let symbol_get = (input) =>{
    let model = {}
    model.symbol = input.symbol
    model.symbol_data = pt.symbols[model.symbol]
    return model
} 

routes.get('/symbol/:symbol', async (req, res) => {
    let input = {}
    input.symbol = req.params.symbol
    console.log("symbol");
    console.log(req.params);
    const apifetch =symbol_get(input)
    console.log(apifetch);
    res.json(apifetch)
})


module.exports = routes