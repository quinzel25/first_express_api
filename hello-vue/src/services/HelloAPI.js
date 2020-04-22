// axios servers
import axios from 'axios'

let base = 'api'
// this is an api call
export default {
    getHelloMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }
}