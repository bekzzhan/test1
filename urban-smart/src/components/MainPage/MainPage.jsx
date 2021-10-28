import { useState } from "react"
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toggleFormValidity } from '../../redux/actions'
import './MainPage.css'

function MainPage ({stateLogin, statePassword, isFormValid, toggleFormValidity}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const checkValidity = (log, pass) => {
    if (log === stateLogin && pass === statePassword) {
      toggleFormValidity(true)
    } else {
      toggleFormValidity(false)
    }
  }

  const changeLogin = (e) => {
    const newLogin = e.target.value
    setLogin(newLogin);
    checkValidity(newLogin, password)

    console.log(newLogin, stateLogin, password, statePassword, isFormValid)
  }

  const changePassword = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword);
    checkValidity(login, newPassword)
    console.log(login, stateLogin, newPassword, statePassword, isFormValid)

  }

  const submitHandler = (e) => {
    e.preventDefault();
    history.push('/profile')
  }

  return (
    <div className="main">
      <div className="form-wrap">
        <form className="form" onSubmit={submitHandler}>
          <div>
            <label htmlFor="input-login">Login:</label>
            <input id="input-login" type="text" className="input-login" value={login} onChange={changeLogin} />
          </div>
          <div>
            <label htmlFor="input-password">Password:</label>
            <input id="input-password" type="password" className="input-password" value={password} onChange={changePassword} />
          </div>
          {isFormValid ? <button type="submit" className="submit-btn" >Sign in</button> : 
          <button type="submit" className="submit-btn" disabled>Sign in</button>}
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    stateLogin: state.login,
    statePassword: state.password,
    isFormValid: state.isFormValid
  }
}

const mapDispatchToProps = {
  toggleFormValidity,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)