const express = require('express')
const axios = require('axios');
const app = express()
const port = 4000

const cors = require('cors')

const BASE_URL = 'https://maps.vancouver.ca/server/rest/services/Hosted/LitterContainer/FeatureServer/4/query'


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://wastely.vercel.app')
//     res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
//     res.header(
//       'Access-Control-Allow-Headers',
//       'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//     )
//     if (req.method === 'OPTIONS') {
//       res.status(200).end()
//       return
//     }

//     next()
// });


app.use(cors({ origin: '*',
    credentials: false,
    methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'}))

app.get('/all', async (req, res) => {
    const queryParams = new URLSearchParams({
        outFields: '*',
        where: '1=1',
        f: 'geojson'
    })
    const fullUrl = `${BASE_URL}?${queryParams.toString()}`
    console.log(fullUrl)
    const response = await axios.get(fullUrl);
    console.log('Data fetched')
    res.send(response.data);
})

app.get('/year-round', async (req, res) => {
    const queryParams = new URLSearchParams({
        outFields: '*',
        where: 'service_status=\'Active - Year round\'',
        f: 'geojson'
    })
    const fullUrl = `${BASE_URL}?${queryParams.toString()}`
    console.log(fullUrl)
    const response = await axios.get(fullUrl);
    console.log('Data fetched')
    res.send(response.data);
})

app.get(`/near-me/query`, async (req, res) => {
    const { x, y } = req.query; // query?x=${x}&y=${y}

    if (isNaN(Number(x)) || isNaN(Number(y))) {
        console.log("The provided query parameters for x and y are not numbers")
    }
    console.log(x-0.01)
    console.log(y-0.01)
    console.log(Number(x)+0.01)
    console.log(Number(y)+0.01)

    const queryParams = new URLSearchParams({
        outFields: '*',
        where: '1=1',
        geometryType: 'esriGeometryEnvelope',
        geometry: `{xmin: ${x - 0.02}, ymin: ${y - 0.02}, xmax: ${Number(x) + 0.02}, ymax: ${Number(y) + 0.02}}`,
        inSR: '4326',
        returnGeometry: 'true',
        f: 'geojson'
    })
    const fullUrl = `${BASE_URL}?${queryParams.toString()}`
    console.log(fullUrl)
    const response = await axios.get(fullUrl);
    console.log('Data fetched')
    res.send(response.data);
})

app.get('/version', (req, res) => {
    res.send('Version 1.0')
})

app.all('*', (req, res) => {
    res.status(404).send('404 Not found')
})

module.exports = app