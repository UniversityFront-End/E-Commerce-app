import React from 'react'
import './contact.css';
import map from './map.jpg';

export default function Contact() {
  return (
    <>
      <div className="containerContact">
        <div className='titleContact'>
          <h1>CONTACTO.</h1>
        </div>
        <div className="rowContact">
          <div className="columnContact">
            <img src={map} alt="CONTACTO." className='mapContact' />
          </div>
          <div className="columnContact">
            <form>
              <label for="fname">Tu Nombre:</label>
              <input type="text" id="fname" name="firstname" placeholder="Tu Nombre." />
              <label for="lname">Tu Apellido:</label>
              <input type="text" id="lname" name="lastname" placeholder="Tu Apellido." />
              <label for="country">País:</label>
              <select id="country" name="country">
                <option value="colombia">Colombia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label for="subject">Mensaje:</label>
              <textarea id="subject" name="subject" placeholder="Escribe Algo." className='textareaSubject'></textarea>
              <input type="submit" value="Enviar." />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
