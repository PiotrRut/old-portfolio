import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <p>Get in touch</p>
            <ul className="icons">
                <li><a href="mailto:piotr.rut99@gmail.com" className="icon fa-envelope"><span className="label">Send me an e-mail</span></a></li>
                <li><a href="http://github.com/PiotrRut/" className="icon fa-github"><span className="label">My GitHub</span></a></li>
                <li><a href="https://linkedin.com/in/piotr-rutkowski-7082a917a/" className="icon fa-linkedin"><span className="label">My LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; {new Date().getFullYear()} Peter Rutkowski</li>
            </ul>
        </div>
    </footer>
)

export default Footer
