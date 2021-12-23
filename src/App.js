import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MyHeader from './pageComponents/MyHeader.jsx';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import Suporte from './pages/Suporte';
import LoginAndRegister from './pages/LoginAndRegister';

export default function App(){

    return(
        <div className = "App">
            <MyHeader/>
            <Routes>
                <Route exact path = "/" element = {<Home/>}/>
                <Route exact path = "/produtos" element = {<Produtos/>}/>
                <Route exact path = "/sobre" element = {<Sobre/>}/>
                <Route exact path = "/suporte" element = {<Suporte/>}/>
                <Route exact path = "/loginAndRegister" element = {<LoginAndRegister/>}/>
            </Routes>
        </div>
    );
}