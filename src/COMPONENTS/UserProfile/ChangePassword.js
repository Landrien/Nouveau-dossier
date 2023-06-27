import React from 'react'


const ChangePassword = () => {
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Changer mot de passe</h1>

            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Ancien mot de passe <span>*</span></label>
                    <input type="password"
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>Nouveau mot de passe <span>*</span></label>
                    <input type="password"
                    />
                </div>


            </div>

            <button className='mainbutton1'

            >Sauvergarder Changement</button>
        </div>
    )
}

export default ChangePassword