import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(addAnecdote(content))
    dispatch(setNotification('created anecdote: ', content, 5))
    event.target.anecdote.value = ''
  }

  return (
    <>
      <h3>Create new anecdote</h3>
      <form onSubmit={submitAnecdote}>
        <input name='anecdote' size={35} /> <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
