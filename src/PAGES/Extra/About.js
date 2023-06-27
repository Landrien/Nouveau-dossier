import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading="Fonctionnement de DeliDash"
        bannerimage= 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        />
        <div className='pgleft pgcommon'>
            <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_531,h_354/v1588108653/assets/c5/1351dc-f9b7-4ab3-a184-b767a9c7539f/original/Browse_content-item-DESKTOP-TABLET-MOBILE-3x2.jpg' alt='noimg' />

            <div>
                <h1>Faites votre choix</h1>
                <p>DeliDash rassemble des centaines de restaurants. Lorsque vous ouvrez l'application, vous pouvez les faire défiler en quête d'inspiration, mais aussi rechercher un restaurant ou un type de cuisine si vous savez ce dont vous avez envie. Vous avez trouvé un plat qui vous plaît ? Il vous suffit d'appuyer dessus pour l'ajouter à votre commande.</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_531,h_354/v1588108669/assets/2a/861fdc-5d81-44c2-94cb-d87f395da1ef/original/Order_content-item-DESKTOP-TABLET-MOBILE-3x2.jpg' alt='noimg' />

            <div>
                <h1>Commandez</h1>
                <p>Au moment du paiement, vous verrez votre adresse, l'heure de livraison estimée et le prix de la commande (taxes et frais de livraison inclus). Si tout vous semble correct, appuyez sur Commander : c'est aussi simple que ça ! Vous pouvez utiliser les mêmes moyens de paiement que pour les courses avec Uber.</p>

            </div>
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_531,h_354/v1588108685/assets/19/f50269-466c-4b7e-8e78-1e2f4d50981a/original/Track_content-item-DESKTOP-TABLET-MOBILE-3x2.jpg' />

            <div>
                <h1>Suivez votre commande</h1>
                <p>Suivez votre commande dans l'application. Vous pourrez d'abord voir que le restaurant accepte la commande et commence à la préparer. Ensuite, lorsqu'elle sera quasiment prête, un coursier à proximité se dirigera vers le restaurant (en voiture, à vélo ou à scooter selon votre région) pour la prendre en charge. Enfin, il se rendra à votre adresse. Vous pourrez voir son nom et sa photo, ainsi que sa progression sur la carte.</p>
            </div>
        </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About