import React from 'react'
import PropTypes from 'prop-types'

const Navigation = ({ elements }) => {
  return <div>
    {elements.map(element => <p key={element}>{element}</p>)}
  </div>
}

Navigation.propTypes = {
  elements: PropTypes.array.isRequired,
}

export default Navigation