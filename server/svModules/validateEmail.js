require("dotenv").config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function emailApi(email){

    const secretKey = process.env.MAILBOXLAYER_SECRET_KEY;

    let checar = fetch(`http://apilayer.net/api/check?access_key=${secretKey}&email=${email}`).then(resposta => resposta.json())
    .then(resposta => {

        if(resposta.mx_found == true || resposta.smtp_check == true){

            return true;
        } else {
        
            return false;
        }
    }).catch((err) => {console.error(err);});

    if(await checar == true){

        return true;
    } else {

        return false;
    }
}

module.exports = emailApi;