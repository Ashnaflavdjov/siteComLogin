require("dotenv").config();
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const myKey = require("../../firebaseKey.json");

initializeApp({

    credential: cert(myKey)
});
const db = getFirestore();

const usersCollection = db.collection("users");
const passwordsCollections = db.collection("passwords");

async function getData(info){
    
    let confirma = usersCollection.where("email", "==", info.email).get()
    .then(resposta => {

        let result = {}

        resposta.forEach(doc => {

            result.email = doc.data().email;
            result.password = doc.data().password;
        })

        console.log(result.email, result.password);

        if(info.email === result.email && info.senha === result.password){

            return true;
        } else {

            return false;
        }
    })

    if(await confirma == true){
        console.log("gg");
        return true;
    }
}

async function insertData(info){

    usersCollection.add({
        name: info.name,
        email: info.email,
        password: info.senha,
        phone_number: info.phoneNumber
    }).then(() => {console.log("User added"); return "User added"})
    .catch(err => {console.log(err)});
}

module.exports = {getData, insertData};