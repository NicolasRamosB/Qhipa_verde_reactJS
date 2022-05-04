import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom'



export const Footer = () => {
        
        return (
                <>
                        <footer className="footer">

                                <ul>
                                        <p className="title-footer">Contacto</p>
                                        <li><span className="email m-1" style={{ color: "#ffffff", fontSize: "130%" }}>✉</span><a
                                                href="mailto:qhipaverde@gmail.com" target="_blank" rel="noopener noreferrer">qhipaverde@gmail.com</a></li>
                                        <li><span className="icon-whatsapp m-2 " style={{ color: "#ffffff", background: "transparent" }}></span><a
                                                href="https://bit.ly/wspqhipaverde" target="_blank" rel="noopener noreferrer" >+51 991 899 907</a></li>
                                        <li><span className="icon-instagram m-2" style={{ color: "#ffffff", background: "transparent" }}></span><a
                                                href="https://www.instagram.com/qhipaverde/?hl=es" target="_blank" rel="noopener noreferrer" >@qhipaverde</a></li>
                                        <li><span className="icon-facebook m-2" style={{ color: "#ffffff", background: "transparent" }}></span><a
                                                href="https://www.facebook.com/qhipaverde" target="_blank" rel="noopener noreferrer">qhipaverde</a></li>
                                </ul>

                        

                        <i className="fa fa-copyright" aria-hidden="true">Copyright-2022</i>

                </footer>
                </>
        )
}

