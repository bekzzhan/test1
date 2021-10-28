import { connect } from "react-redux"

function ProfilePage({stateLogin}) {
  return (
    <h1>{stateLogin}</h1>
  )
}

const mapStateToProps = (state) => {
  return {
    stateLogin: state.login
  }
}

export default connect(mapStateToProps,null)(ProfilePage);