import React from 'react'
import PropTypes from 'prop-types'
import '../styles/header.css'

const  Header = (props) => {
  const { headerText } = props
  return (
    <div className="header">
      <div className="header-text">
        {headerText}
      </div>
    </div>
  )
}

Header.propTypes = {
  headerText: PropTypes.string,
}

export default Header