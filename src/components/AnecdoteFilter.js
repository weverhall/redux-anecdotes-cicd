import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value))
  }

  const style = {
    marginTop: 30
  }

  return (
    <div style={style}>
      <input
        placeholder="Filter..."
        onChange={handleFilterChange}
      />
    </div>

  )
}

export default AnecdoteFilter
