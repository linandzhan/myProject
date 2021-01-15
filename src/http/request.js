import axios from './axios'

export function post(url, param, callback) {
    axios.post(url, param).then(data => {
        if (data !== undefined && data !== '' && data !== null) {
            // callback when data is exist
            callback(data)
        }
      console.log(data);
    })
}

export function postWithConfig(url, param, config, callback) {
    axios.post(url, param, config).then(data => {
        if (data !== undefined && data !== '' && data !== null) {
            callback(data)
        }
    })
}

export function get(url, param, callback) {
    axios.get(url, param).then(data => {
        if (data !== undefined && data !== '' && data !== null) {
            callback(data)
        }
    })
}


