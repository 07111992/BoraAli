import "../DetalhesBom_Jesus/DetalhesBom_Jesus.css"

import imgCaixaCultural from "../../img/pagina 8 imagem 1 caixa cultural.jpg"
import img2CaixaCultural from "../../img/pagina 8 imagem 2 caixa cultural.webp"
import img3CaixaCultural from "../../img/pagina 8 imagem 3 caixa cultural.jpg"
export default function DetalhesPorto_recife () {
    return <div>

<main className="bomJesus">
            <div className="containerBomJesus">

                <img src={imgCaixaCultural}></img>
                <h1>Caixa Cultural</h1>
            </div >

            <div className="containerTextoBomJesus">
                <h1 className="title1_bj">Caixa Cultural</h1>

                <p>A Caixa Cultural Recife é um espaço cultural localizado na cidade do Recife, capital do estado de Pernambuco, Brasil. Integra um conjunto de sete centros culturais criados pela Caixa Econômica Federal em capitais brasileiras. No térreo, o piso de vidro deixa à mostra as ruínas do Recife de séculos passados. São mais de 11 mil peças, incluindo materiais de construção, cravos de ferro, pedras e até ossos.

</p>

    <img className="ruaBomJesus2" src={img2CaixaCultural}></img>



<h1 className="title2_bj">Caixa Cultural História
</h1>

<p>É no antigo prédio da Bolsa de Valores de Pernambuco e da Paraíba, considerado cartão-postal do Centro histórico, que a Caixa Cultural oferece arte, lazer e educação. Dois pavimentos abrigam o acervo, com destaque para peças arqueológicas, que contam a história da Capital, bem como a desse edifício de 1912.A Caixa Cultural Recife, próximo ao Marco Zero, foi inaugurada no dia 15 de maio de 2012, e fica antigo prédio da bolsa de valores de Pernambuco que foi inteiramente reformado.
Ganhou iluminação especial para a abertura, um salão principal que possui piso de vidro para permitir a observação das ruínas de construções mais antigas, teto transparente circular onde o visitante que estiver no segundo piso pode caminhar sobre a estrutura. Há ainda um teatro com 180 lugares.

</p>

<div className="ruaBomJesus3"><img src={img3CaixaCultural}></img></div>
    


<h1 className="title3_bj">Caixa Cultural Restaurantes</h1>

<p>• Diversos restaurantes ao redor que atende diversos gostos.
</p>

<h1 className="title4_bj">Horário de funcionamento Caixa Cultural
</h1>

<p>• Terça-feira a Sábado, das 10h às 20h<br></br> 
• Domingos e Feriados, das 10h às 18h
</p>

<h1 className="title5_bj">Endereço Caixa Cultural
</h1>
<p>• Av. Alfredo Lisboa, 505 - Bairro do Recife - Recife/PE

</p>

<h1 className="title6_bj">Mapa de localização</h1>
<p></p>



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.380685118865!2d-34.873881589413536!3d-8.062595791931553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a4848fb9e9%3A0x7415d5867cebcdf4!2sCAIXA%20Cultural%20Recife!5e0!3m2!1spt-BR!2sbr!4v1701655710235!5m2!1spt-BR!2sbr" width="800" height="650" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

           
            </div>



        </main>

    </div>
}