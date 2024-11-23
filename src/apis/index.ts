import axios from "axios";

const protocol = 'https'
const host = '127.0.0.1'
const port = 3000

export const backendURL = `${protocol}://${host}:${port}`

export const axiosInstance = axios.create({})