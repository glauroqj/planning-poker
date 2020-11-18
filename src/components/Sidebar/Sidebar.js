import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
/** style */
import * as El from './Sidebar.style'
/** components */

const Sidebar = ({ list, isVisible }) => (
  <El.SidebarContainer isVisible={isVisible}>
    <h4> Closests {list.length} Cities</h4>
    <El.SidebarList>
      {list.length > 0 && list.map((item, idx) => (
        <Link
          key={idx}
          to={{
            pathname:`detail/${item.name}/${item?.main?.temp || 0}/${item?.main?.temp_min || 0}/${item?.main?.temp_max || 0}`
          }}
          target="_blank"
        >
          <El.SidebarItem className='animated fadeIn'>
            {item.name} <span>{item?.main?.temp || 0}º</span>
          </El.SidebarItem>
        </Link>
      ))}
    </El.SidebarList>
  </El.SidebarContainer>
)

Sidebar.defaultProps = {
  list: []
}

Sidebar.propTypes = {
  list: PropTypes.array,
  isVisible: PropTypes.bool
}

export default memo(Sidebar)