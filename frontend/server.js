var axios = require('axios');
var data = JSON.stringify({
    "collection": "activity",
    "database": "Client",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-nhwaq/endpoint/test/find',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'xP6hHvoRd4lyeYi7CRBWAp4Phg15Ix3xdBJgMijLDtUkJyKoNmEvxM29TJyyvFpa'
    },
    data : data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
