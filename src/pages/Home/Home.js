import React, { useEffect, memo } from 'react'
import { useSelector } from 'react-redux'
/** style */
import * as El from './Home.style'
/** components */
import Map from 'components/Map/Map'
import HomeButtonContainer from './_homeButtonContainer'
import Sidebar from 'components/Sidebar/Sidebar'

const Home = () => {
  const { position, mapLoading } = useSelector(state => state.map)
  
  const { isVisibleSidebar,  data } = useSelector(state => state.weather)

  useEffect(() => {
    /** update url after change pin position */
    if (!mapLoading) updateUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  const updateUrl = () => {
    const { lat, lng } = position
    const params = new URLSearchParams(window.location.search)
    /** check searchTerm first, only apply this feature if searchTerm !== '' */
    params.set('lat', lat)
    params.set('lng', lng)

    if ( params.get('lat') && params.get('lng') ) {
      window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    } else {
      window.history.replaceState({}, '', `${window.location.pathname}`)
    }
  }

  return (
    <El.HomeContainer className='animated fadeIn'>
      
      <Sidebar list={data} isVisible={isVisibleSidebar} />
      <HomeButtonContainer />
      <Map />

    </El.HomeContainer>
  )
}

export default memo(Home)