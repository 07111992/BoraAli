import './QuemSomos.css'

import Isis from '../../img/isis.jpg'
import Linkedin from '../../img/linkedin.png'
import GitHub from '../../img/github_preto.png'
import Italo from '../../img/foto_prof.jpg'
import Douglas from '../../img/douglas.jpg'
import Eliel from '../../img/foto eliel.jpg'

export default function QuemSomos(){
    return(
        <main>    
                            
            <div className="container_participantes">
                <div className="card_participantes" id="isis">
                  
                    <img className="img_participantes" src={Isis} id="isis"  alt="" />
                    <p>Isis Braz</p>
                    <div className="redes_sociais">
                        <img src={Linkedin} alt=""/>
                        <img src={GitHub} alt=""/>
                    </div>
                </div>
                <div className="card_participantes">
                    <img className="img_participantes" src={Italo} alt=""/>
                    <p>Ithalo Soares</p>
                    <div className="redes_sociais">
                        <img src={Linkedin} alt=""/>
                        <img src={GitHub} alt=""/>
                    </div>
                </div>
                <div className="card_participantes">
                <img className="img_participantes" src={Italo} alt=""/>
                    <p>Gustavo Miranda</p>
                    <div className="redes_sociais">
                        <img src={Linkedin} alt=""/>
                        <img src={GitHub} alt=""/>
                    </div>
                </div>
                <div className="card_participantes">
                <img className="img_participantes" src={Douglas} alt=""/>
                    <p>Douglas Stevens</p>
                    <div className="redes_sociais">
                        <img src={Linkedin} alt=""/>
                        <img src={GitHub} alt=""/>
                    </div>
                </div>
                <div className="card_participantes">
                <img className="img_participantes" src={Eliel} alt=""/>
                    <p>Eliel Santana</p>
                    <div className="redes_sociais">
                        <img src={Linkedin} alt=""/>
                        <img src={GitHub} alt=""/>
                    </div>
                </div>
            </div>
        </main>   

    )
        
    
}