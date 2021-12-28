import React from "react";

export default function LoginAndRegister(){

    return(
        <div id = "secondBody">
            <div className = "middleCollumn">
                <Login/>
                <Register/>
            </div>
        </div>
    );
}

function Register(){

    return(
        <form id = "registerForm">
            <div>
                <label htmlFor = "nome">Nome</label>
                <input type = "text" name = "nome" id = "nome"/>
            </div>
            <div>
                <label htmlFor = "email">Email</label>
                <input type = "email" name = "email" id = "email"/>
            </div>
            <div>
                <label htmlFor = "senha">Senha</label>
                <input type = "password" name = "senha" id = "senha"/>
                <input type = "password" name = "senhaDnv" id = "senhaDnv" placeholder = "Confirme a senha"/>
            </div>
            <div>
                <label htmlFor = "phoneNumber">Numero de telefone</label>
                <input type = "tel" name = "phoneNumber" id = "phoneNumber"/>
            </div>
            <div>
                <button type = "button" onClick={sendRegisterForm}>Registrar</button>
            </div>
        </form>
    );
}

function Login(){

    return(
        <form id = "loginForm">
            <div>
                <label htmlFor = "lEmail">Email</label>
                <input type = "email" name = "email" id = "lEmail"/>
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type = "password" name = "senha" id = "lSenha"/>
            </div>
            <div>
                <button type = "button" onClick = {sendLoginForm}>Logar</button>
            </div>
        </form>
    );
}

function sendLoginForm(){

    const form = document.getElementById("loginForm");

    let email = form.lEmail.value;
    let senha = form.lSenha.value;

    if(validateEmail(email) == false){alert("Email must not be blank or invalid"); return};
    if(senha == ""){alert("Password must not be blank"); return};

    email = email.toString().toLowerCase();

    fetch(`http://192.168.0.106:3001/login`, {method: "POST", headers: {"Content-type": "application/json; charset=UTF-8"}, body: JSON.stringify({email, senha})})
    .then(resposta => resposta.json())
    .then(resposta => {
        
        alert(resposta);
    });
}

function sendRegisterForm(){

    const form = document.getElementById("registerForm");

    let name = form.nome.value;
    let email = form.email.value;
    let senha = form.senha.value;
    let senhaDnv = form.senhaDnv.value;
    let phoneNumber = form.phoneNumber.value;

    if(name == ""){alert("Name must not be blank"); return;}
    if(validateEmail(email) == false){alert("Email must not be blank or invalid"); return;}
    if(senha == ""){alert("Password must not be blank"); return;}
    if(senhaDnv != senha){alert("Passwords don't match"); return;}
    if(phoneNumber == ""){alert("Phone number must not be null"); return;} 

    email = email.toString().toLowerCase();

    fetch(`http://192.168.0.106:3001/register`, {method: "POST", headers: {"Content-type": "application/json; charset=UTF-8"}, body: JSON.stringify({name, email, senha, phoneNumber})})
    .then(resposta => resposta.json()).then(resposta => {

        alert(resposta);
    });
}

function validateEmail(email){

    let regex = /\S+@\S+\.\S+/;
    let valido = regex.test(email);

    if(!valido) return false;
    if(email == "" || email == null) return false;

    return true;
}