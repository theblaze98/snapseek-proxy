import { Router } from 'express'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
})

const v1Routes = Router()

v1Routes.get('/photos', async (req, res) => {
  try {
    const response = await axiosInstance.get('/photos', {
      params: {
        ...req.query, 
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNPLASH_ACCESS_KEY}`,
      },
    })
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

v1Routes.get('/photos/:id', async (req, res) => {
  try {
    const response = await axiosInstance.get(`/photos/${req.params.id}`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNPLASH_ACCESS_KEY}`,
      },
    })
    res.json(response.data)
  } catch (error) {
    res.status(error.response.status).json({ error: error.message })
  }
})

export default v1Routes
