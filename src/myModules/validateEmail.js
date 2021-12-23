const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const db = require("./dataBase");

function emailApi(info){

    const secretKey = process.env.MAILBOXLAYER_SECRET_KEY;

    fetch(`http://apilayer.net/api/check?access_key=${secretKey}&email=${info.email}`).then(resposta => resposta.json())
    .then(resposta => {

        if(resposta.mx_found == true || resposta.smtp_check == true){

            db.insertData(info);
        } else {
        
            console.error(resposta.mx_found + " " + resposta.smtp_check);
        }
    }).catch((err) => {console.error(err);});
}

module.exports = emailApi;