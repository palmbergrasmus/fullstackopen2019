import React from 'react'
import PropTypes from 'prop-types'
import { useField } from '../hooks'

const LoginForm = props => {
  const { handleLogin, handleVisible, visible } = props
  const username = useField('text')
  const password = useField('password')

  const onLogin = (event) => {
    event.preventDefault()
    handleLogin(username.inputProps.value, password.inputProps.value)
  }

  return (
    <div>
      {visible &&
        <form onSubmit={onLogin}>
          <div>
            username
            <input
              {...username.inputProps}
            />
          </div>
          <div>
            password
            <input
              {...password.inputProps}
            />
          </div>
          <button type="submit">login</button>
        </form>
      }
      <button onClick={handleVisible}>{visible ? 'cancel' : 'login'}</button>
    </div>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
}

export default LoginForm