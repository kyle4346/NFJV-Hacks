var axios = require('axios');
var data = JSON.stringify({
    "collection": "activity",
    "database": "Client",
    "dataSource": "Cluster0",
    "username":"kjcorte2",
    "password":"frenchfries1",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'http://localhost:4000/users/authenticate',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        
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