const express = require('express')
const axios = require('axios');
const app = express()
const port = 4000

var cors = require('cors')

const BASE_URL = 'https://maps.vancouver.ca/server/rest/services/Hosted/LitterContainer/FeatureServer/4/query'

app.use(cors())

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
    console.log(x-0.01)
    console.log(y-0.01)

    //esri takes in x,y mercator coordinates and returns it in geojson format
    const queryParams = new URLSearchParams({
        outFields: '*',
        where: '1=1',
        geometryType: 'esriGeometryEnvelope',
        geometry: `{xmin: 491500, ymin: 5455100, xmax: 491600, ymax: 5455300}`,
        returnGeometry: 'true',
        f: 'json'
    })
    const fullUrl = `${BASE_URL}?${queryParams.toString()}`
    console.log(fullUrl)
    const response = await axios.get(fullUrl);
    console.log('Data fetched')
    res.send(response.data);
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

