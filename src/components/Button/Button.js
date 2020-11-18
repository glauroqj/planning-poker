import React from 'react'
import PropTypes from 'prop-types'

/**style */
import * as El from './Button.style'
/** components */
import Loading from 'components/Loading/Loading'

const Button = (
  {
    color,
    size,
    children,
    buttonLoading,
    disabled,
    actionClick,
  }) => {

  if (buttonLoading) return (
    <El.ButtonLoading>
      <Loading />
    </El.ButtonLoading>
  )

  return (
    <El.Button 
      type="button"
      disabled={disabled}
      color={color}
      size={size}
      onClick={ e => actionClick(e) }
    >
      {children}
    </El.Button>
  )
}

Button.defaultProps = {
  color: 'primary',
  size: 'sm',
  buttonLoading: false,
  disabled: false,
}

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary'
  ]),
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  buttonLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  actionClick: PropTypes.func,//.isRequired,
}

export default Button