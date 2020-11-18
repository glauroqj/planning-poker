import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
/** style */
import * as El from './Detail.style'

const Detail = ({ history }) => {
  const { city, temp, min, max } = useParams()
  console.log( useParams(), history )

  if (!city || !temp || !min || !max) history.push('/')
  
  return (
    <El.DetailContainer className='animated fadeIn'>

      <El.DetailContent>

        <El.DetailList>
          <h2>Weather Detail</h2>

          <El.DetailListItem>City: <b>{city}</b></El.DetailListItem>
          <El.DetailListItem>Temperature: <b>{temp}º</b></El.DetailListItem>
          <El.DetailListItem>Temperature Min.: <b>{min}º</b></El.DetailListItem>
          <El.DetailListItem>Temperature Max.: <b>{max}º</b></El.DetailListItem>

        </El.DetailList>

      </El.DetailContent>

    </El.DetailContainer>
  )
}

export default withRouter(Detail)