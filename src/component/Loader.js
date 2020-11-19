import React from 'react'
import '../styles/loader.css'

const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loader-Gif" />
    </div>
  )
}

export default Loader