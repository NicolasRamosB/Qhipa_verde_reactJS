import './Footer.css';
import React from 'react';
export const Footer = () => {
    return (
        <>
        <footer class="footer">

<ul>
    <p class="title-footer">Contacto</p>
    <li><span class="email m-1" style={{color: "#ffffff", fontSize:"130%"}}>✉</span><a
            href="mailto:qhipaverde@gmail.com" >qhipaverde@gmail.com</a></li>
    <li><span class="icon-whatsapp m-2 " style={{color: "#ffffff", background:"transparent"}}></span><a
            href="https://bit.ly/wspqhipaverde" >+51 991 899 907</a></li>
    <li><span class="icon-instagram m-2" style={{color: "#ffffff", background: "transparent"}}></span><a
            href="https://www.instagram.com/qhipaverde/?hl=es" >@qhipaverde</a></li>
    <li><span class="icon-facebook m-2" style={{color: "#ffffff", background: "transparent"}}></span><a
            href="https://www.facebook.com/qhipaverde">qhipaverde</a></li>
</ul>

<ul>
    <p class="title-footer">Catalogo</p>
    <li><a href="">Macetas</a></li>
    <li><a href="">Plantas</a></li>
    <li><a href="">Productos</a></li>
    <li><a href="">Diseños y Paisajismo</a></li>
    <li><a href="">Muebles</a></li>
</ul>

<i class="fa fa-copyright" aria-hidden="true">Copyright-2022</i>

</footer>
        </>
    )

}

