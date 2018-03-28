import React from 'react'
import PropTypes from 'prop-types'

const SelectView = ({ active, dataType, onClick }) => {
  if (active) {
    return <span>{dataType}</span>
  }

  return (
    <a href="#" onClick={e => { // eslint-disable-line jsx-a11y/href-no-hash
      e.preventDefault()
      onClick()
    }}>
     {dataType}
    </a>
  )
}

SelectView.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SelectView