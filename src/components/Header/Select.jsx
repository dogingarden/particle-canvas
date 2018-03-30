import React from 'react'
import PropTypes from 'prop-types'

const SelectView = ({ active, showType, dataName,onClick }) => {
  if (active) {
    return <span>{dataName}</span>
  }

  return (
    <a href="#" onClick={e => { // eslint-disable-line jsx-a11y/href-no-hash
      e.preventDefault()
      onClick()
    }}>
     {dataName}
    </a>
  )
}

SelectView.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SelectView