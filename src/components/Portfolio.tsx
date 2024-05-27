'use client'

import React, { useState } from 'react'
import PortfolioProject from './PortfolioProject'
import '../styles/portfolio.css'

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section className='portfolio' id='portfolio'>
      <h3 className='section-title'>Mis Trabajos</h3>

      <div className='project-list'>
        <PortfolioProject
          name='Barmanager.app'
          imgName='barmanager'
          url='https://www.barmanager.app'
          text='Una plataforma para que bares y restaurantes creen su carta digital. Un proyecto en desarrollo permanente.'
        />

        <PortfolioProject
          name='Trivify.es'
          imgName='trivify'
          url='https://www.trivify.es'
          text='La plataforma de servicios basados en la web de Trivify. También el desarrollo de su software de gestión con electron.'
        />

        <PortfolioProject
          name='Tombolator.com'
          imgName='tombola'
          url='https://www.tombolator.com'
          text='Una plataforma de marketing para crear rifas y tómbolas.'
        />

        {showAll && (
          <>
            <PortfolioProject
              name='Pluviometría'
              imgName='cloud'
              url='https://domindez.github.io/pluviometria-castillodelocubin/'
              text='Un proyecto automatizado que recopila los datos de una estación de lluvia para llevar un registro de precipitaciones.'
            />

            <PortfolioProject
              name='Cartas QR'
              imgName='menu'
              url='https://www.trivify.es/cartasqr'
              text='Una plataforma de menús digitales gestionados. Se ofrece como un servicio de Trivify.'
            />

            <PortfolioProject
              name='Hotel NCH'
              imgName='hotel'
              url='https://www.hotelnch.com'
              text='La web del Hotel NCH, con su motor de reservas y sistema de fidelización.'
            />

            <PortfolioProject
              name='Gottan Grill'
              imgName='gottan'
              url='https://www.gottangrill.com'
              text='La web de la famosa hamburguesería gourmet Gottan. Integra su motor de reservas.'
            />

            <PortfolioProject
              name='Asador Ovidio'
              imgName='ovidio'
              url='https://www.asadorovidio.es'
              text='La web del prestigioso Asador Ovidio.'
            />

            <PortfolioProject
              name='Apartamentos Lola'
              imgName='lola'
              url='https://www.apartamentoslolamalaga.com'
              text='La web de los apartamentos turísticos Lola Beach, con integración de motor de reservas externo'
            />
          </>
        )}
      </div>

      {!showAll && <button onClick={toggleShowAll} className='show-more-btn'>Más proyectos</button>}
    </section>
  )
}

export default Portfolio
