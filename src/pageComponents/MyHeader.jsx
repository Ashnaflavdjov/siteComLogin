import {Link} from "react-router-dom";

export default function MyHeader(){

    return(
        <header>
            
            <div id="icon">
                <Link to = "/">
                    <img src="images/amogusFodase.png" alt="Ícone"/>
                </Link>
            </div>

            <div className = "botoes">

                <Link to = "/">
                    <div className = "hButton">
                        Home
                    </div>
                </Link>

                <Link to = "/produtos">
                    <div className = "hButton">
                        Produtos
                    </div>
                </Link>

                <Link to = "/sobre">
                    <div className = "hButton">
                        Sobre
                    </div>
                </Link>

                <Link to = "/suporte">
                    <div className = "hButton">
                        Suporte
                    </div>
                </Link>
            
            </div>
            
            <Link id = "loginButton" to = "/loginAndRegister">
                <div>
                    Login / Register
                </div>
            </Link>
        </header>
    );
}