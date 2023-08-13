import Api from './index'
import axios from 'axios'

const API = axios.create({ baseURL: 'https://socketio-nt.herokuapp.com/'})

export const getStore = async() => {
    return await Api.get(`/getChannels`)
}

export const addStore = async(formData : any) => {
    return await Api.post(`/addProduct` , formData )
}

export const updateStore = async(id : number) => {
    return await Api.put(`/EditProduct` + id)
}

