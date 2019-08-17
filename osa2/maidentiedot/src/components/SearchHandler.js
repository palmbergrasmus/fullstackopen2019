import React from 'react'

const SearchHandler = props => {
  const { filter, onChange } = props
  return (
    <div>
      find countries <input value={filter} onChange={onChange}/>
    </div>
  )
}

export default SearchHandler
