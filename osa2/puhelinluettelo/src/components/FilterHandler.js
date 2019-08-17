import React from 'react'

const FilterHandler = props => {
  const { filter, onChange } = props
  return (
    <div>
      rajaa näytettäviä: <input value={filter} onChange={onChange}/>
    </div>
  )
}

export default FilterHandler
