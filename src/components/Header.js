import React from 'react'
import Timer from './Timer'
import Characters from './Characters'

export default function Header( { puzzle } ) {
  return (
    <div className='header'>
      <h1>Remaining Characters :</h1>
      <Characters puzzle={puzzle}/>
      <Timer />
    </div>
  )
}
