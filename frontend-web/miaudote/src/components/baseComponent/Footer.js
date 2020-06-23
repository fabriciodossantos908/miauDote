import React from 'react'
import '../../materialize/css/materialize.css'

const footer = () => {
    return(
        <footer className="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l3 s12">
                        <h5 class="white-text">Inicio</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Lojas</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Downloads</a></li>
                        </ul>
                    </div>
                    <div class="col l3 s12">
                        <h5 class="white-text">Sobre nós</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Informações da StartUp</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Contato</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Blog</a></li>
                        </ul>
                    </div>
                    <div class="col l3 s12">
                        <h5 class="white-text">Suporte</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">FAQ</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Telefones</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Chat</a></li>
                        </ul>
                    </div>
                    <div class="col l3 s12">
                        <h5 class="white-text">Informações</h5>
                        <ul>
                        <h10 class="grey-text text-lighten-3">Nossa Startup foi criada com entuito de
                        ajudar animais perdidos, e realizar seu sonho de ter um pet !</h10>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                © 2019 - Todos direitos reservados.
                <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )
}

export default footer