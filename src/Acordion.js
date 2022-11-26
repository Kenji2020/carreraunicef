import React from 'react'
import { useState } from 'react'
import "./acordion.css"

const Acordionqlo = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
            if(selected ==i){
                return setSelected(null)
            }
            setSelected(i)
    }
  return (
    <div className="wrapper">
        <div className='accordion'>
           {data.map((item, i) => {
            return (
                <div className="item">
                    <div className="title" onClick={()=> toggle(i)}>
                      <h2>{item.question}</h2>  
                      <span> {selected=== i ? "-" : "+"} </span>
                    </div>
                    <div className={selected === i ? "content show": "content"}>
                        {item.answer}
                    </div>
                </div>
            )
           })}
        </div>
    </div>
  )
}
const data = [
    {question:"¿Qué es UNICEF Heroes Run", answer:"Es una serie de corridas familiares organizadas por UNICEF para promover los derechos de la infancia presentadas por los conocidos superhéroes de DC Comics, Wonder Woman, Batman, Superman y la Liga de la Justicia."},
    {question:"¿Cuál es la fecha del evento?", answer: 'Santiago: 11 de diciembre. UNICEF Heroes Run: Wonder Woman Villarrica: 22 enero 2023 UNICEF Heroes Run: Batman La Serena: 5 de febrero UNICEF Heroes Run: Superman Viña del Mar: 19 de febrero UNICEF Heroes Run: La Liga de la Justicia'},
    {question:"¿Cuál es el lugar de la convocatoria?", answer: 'Santiago: Ciudad Empresarial, Huechuraba. Villarrica: Parque de la Ciudad. La Serena: El Faro. Viña del Mar: Sporting Club'},
    {question:"¿Para participar en las 4 corridas y tener los 4 KITS distintos debo inscribirme en cada una?", answer: 'Sí, cada corrida es independiente y debes inscribirte en cada una de ellas para obtener el kit correspondiente.'},
    {question:"¿Qué horarios tiene cada corrida?", answer:'la citaticón es a las 8:30 hasta las 12:00 hrs.'},
    {question:'¿Puedo compar mi inscripción en el lugar el día del evento?', answer:'Sí, solo en caso de que existan cupos disponibles.'},
    {question:'¿Donde se retira el kit?', answer:' En Santiago desde el 5 al 10 de diciembre en el Mall Open Kennedy de Las Condes. • En Villarrica Será en la misma ciudad, fecha y lugar en por definir • En La Serena: Será en la misma ciudad, fecha y lugar en por definir • En Viña del Mar: Será en la misma ciudad, fecha y lugar en por definir.'},
    {question: '¿Cuántos km son?', answer: '2 y 5 kilómetros en una corrida no competitiva'},
    {question:'¿Desde que edad se paga?', answer:'Desde los 5 años'},
    {question:'¿Dónde puedo comprar mi inscripción y mi kit', answer: 'A través de ticketplus'},
    {question:'¿Qué es el Kit de corredor?', answer: 'Tu kit es la polera oficial, morral y entrada, que permite entrar al evento. Cada carrera tendrá su KIT distinto de colección.'},
    {question:'¿Qué pasa si perdí mi ticket?',answer:'Puedes contactarte con Ticketplus para recibir ayuda para recuperarla en este link: https://ticketplus.zendesk.com/hc/es/requests/new' },
    {question:'¿Qué incluye mi kit de corredor?', answer:'1 Polera oficial exclusiva para cada carrera, 1 morral, 1 pulsera.'},
    {question:'¿Puedo escoger el tamaño de mi polera?', answer:'Sí, al momento de comprar tu entrada en Ticketplus, podrás escoger el tamaño de tu polera.'},
    {question:'¿Puedo user mi disfraz o cosplay para correr?', answer:'Claro que sí! UNICEF Heroes Run es una fiesta para toda la familia en la que todos seremos superhéroes defendiendo la infancia.'},
    {question:'¿Puedo ingresar sin mi entrada, teniendo el comprobante de compra?', answer:'Si, pero para obtener tu Kit deberás presentar tu comprobante y CI de quién hizo la compra.'},
    {question:'¿Se puede traspasar mi entrada?', answer:'Si. La inscripción es al portador.'},
    {question:'¿Puedo ir con mi mascota?', answer:'Si, pero deberás ser muy responsable con su comportamiento y estar atento para mantener la limpieza del lugar.'},
    {question:'¿Habrá lugar para dejar mis pertenencias?', answer: 'No, es importante que lleves solo lo necesario y siempre resguardes tus cosas.'},
    {question:'¿Por qué al comprar hay una diferencia con el valor informado?', answer:'Al costo de la inscripción debes sumar el cargo pro servicio de la ticketera.'},
    {question:'¿Qué pasa si mi polera me queda chica?', answer:'Se podrá cambiar el día del evento, solo y solo si tenemos la talla requerida.'},
    {question:'¿Puedo retirar mi kit el dia del evento?', answer: 'No, el retiro del kit es hasta el día previo de la actividad.'}, 
    {question: 'Si no puedo ir a retirar personalmente mi kit, ¿puede ir alguien más por mí?', answer:'Sí. La persona que retire deberá presentar un poder simple firmado por el inscrito y una fotocopia de ambos rut RUT, el que retira y el inscrito.'}
]


export default Acordionqlo      