import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const baseUrl = 'https://redux-anecdotes-w-server.onrender.com/anecdotes'

const getId = () => uuidv4()

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const id = getId()
  const votes = 0
  const object = { content, id, votes }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (object) => {
  const response = await axios.put(`${baseUrl}/${object.id}`, object)
  return response.data
}

export default {
  getAll,
  createNew,
  update
}
