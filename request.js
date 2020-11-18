const axios = require('axios').default


axios.request({
    url: 'http://localhost:3100/login',
    method: 'post',
    data: {
        email: '',
        password: '',
    }
}).then((res) => {
    console.log(res.data.data)
}).catch((e) => {
    console.error(e)
})


axios.request({
    url: 'http://localhost:3100/authorize',
    method: 'put',
    data: {
        email: '',
        password: '',
    }
}).then((res) => {
    console.log(res.data.data)
}).catch((e) => {
    console.error(e)
})