import '../footer/footer.css'

import iconInstagram from '../../img/instagram.png'
import iconFacebook from '../../img/facebook.png'
import iconLinkedin from '../../img/linkedin.png'

export default function Footer(){
    return <div>
    <footer>
        <p>&copy; 2023 GIIDE Innovation. Todos os direitos reservados.</p>
        <div className="contanier_redes_sociais">
            <a href=""><img src={iconInstagram} alt=""/></a>
            <a href=""><img src={iconFacebook} alt=""/></a>
            <a href=""><img src={iconLinkedin} alt=""/></a>
        </div>
    </footer>

    </div>
}