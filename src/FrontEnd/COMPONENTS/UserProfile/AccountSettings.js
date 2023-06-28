import React from 'react'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Information Personnel</h1>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Votre Nom <span>*</span></label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Téléphone <span>*</span></label>
          <input type='text' name='phone' id='phone'

          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email <span>*</span></label>
          <input type='email' name='email' id='email'

          />
        </div>

      
      </div>

      <button className='mainbutton1'
        
        >Enregistrer les modifications</button>
    </div>
  )
}

export default AccountSettings