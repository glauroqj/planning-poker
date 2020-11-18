import React from 'react'
import PropTypes from 'prop-types'
/** style */
import * as El from './Loading.style'

const Loading = ({text, color, size}) => (
  <El.LoadingContainer>
    {text}
    <El.LoadingRing size={size}>
      <div></div><div></div><div></div><div></div>
    </El.LoadingRing>
  </El.LoadingContainer>
)

Loading.defaultProps = {
  text: '',
  color: 'primary',
  size: {
    h: '50px',
    w: '50px'
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.shape({
    h: PropTypes.string,
    w: PropTypes.string
  })
}

export default Loading