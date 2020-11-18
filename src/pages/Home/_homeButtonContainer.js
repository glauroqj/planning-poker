import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** style */
import * as El from './Home.style'
/** actions */
import { fetchWeatherService } from 'store/actions/weatherActions'
/** components */
import Button from 'components/Button/Button'

const HomeButtonContainer = () => {
  const dispatch = useDispatch()

  const { position, mapLoading } = useSelector(state => state.map)
  
  const { loading } = useSelector(state => state.weather)

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (!mapLoading && !showButton) setShowButton(true)
    if ( params.get('lat') && params.get('lng') ) setShowButton(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  return (
    <>
      {!mapLoading && (
        <El.HomeButtonContainer 
          className='animated fadeIn'
          show={showButton}
        >
          <Button
            actionClick={() => {
              dispatch(
                fetchWeatherService(position)
              )
            }}
            size='lg'
            color='secondary'
            buttonLoading={loading}
          >
            Search
          </Button>
        </El.HomeButtonContainer>
      )}
    </>
  )
}

export default HomeButtonContainer