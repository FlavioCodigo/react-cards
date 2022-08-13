import React from 'react'
import Card from './Card'
import img_lobo1 from '../assets/img/lobo1.jpg'
import img_lobo2 from '../assets/img/lobo2.jpg'
import img_perro from '../assets/img/perro.jpg'

const cards = [
  {
    id: 1,
    title: 'Lobo',
    img: img_lobo1,
    url: 'https://www.nationalgeographic.com.es/animales/lobos',
    text: 'Nombre científico: Canis Lupus es un mamífero placentario del orden de los carnívoros. '
  },
  {
    id: 2,
    title: 'Fotos',
    img: img_lobo2,
    url: 'https://www.nationalgeographic.com.es/animales/lobos/fotos',
    text: 'Selección de fotos de lobos de página de National Geographic'
  },
  {
    id: 3,
    title: 'Domesticación',
    img: img_perro,
    url: 'https://www.nationalgeographic.com.es/naturaleza/perros-y-lobos-dos-canidos-cerebros-muy-diferentes_17106',
    text: 'Los perros cuentan hoy con habilidades cognitivas compartidas con bebés humanos, más no con lobos'
  },
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {cards.map(({id, title, img, url, text }) => (
          <div className='col-md-4' key={id}>
            <Card title={title} imgSource={img} url={url} text={text}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
