import React from 'react'
import HeaderLP from './HeaderLP'
import AboutLP from './about'
import FotterLP from './fotterLP'
import ServiceLP from './Service'
import ContactLP from './contact'

const LayoutLP = () => {
  return (
    <div>
      <HeaderLP/>
      <AboutLP/>
      <ServiceLP/>
      <ContactLP/>
      <FotterLP/>
    </div>
  )
}

export default LayoutLP
