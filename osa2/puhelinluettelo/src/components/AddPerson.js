import React from 'react'

const AddPerson = props => {
  const { onSubmit, valueName, valueNumber, onChangeName, onChangeNumber } = props

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>lisää uusi</h2>
        nimi: <input value={valueName} onChange={onChangeName}/><br/>
        numero: <input value={valueNumber} onChange={onChangeNumber}/>
      </div>
      <div>
        <button >lisää</button>
      </div>
    </form>
  );
}

export default AddPerson
