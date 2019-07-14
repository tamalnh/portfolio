import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Nav } from 'react-bootstrap';
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedinIn,
    FaStackOverflow,
    FaBehanceSquare,
    FaGithubSquare,
    FaCodepen
} from 'react-icons/fa';

import '../styles/header.css'

const Header = ({ siteTitle }) => (
        <Nav className="main-menu">
            <div>
                <a href="/" className="logo">Tamal H</a>
            </div>

            <div>
                <Nav.Item as={Link} to="/">Home</Nav.Item>
                <Nav.Item as={Link} to="/#about">About</Nav.Item>
                <Nav.Item as={Link} to="/#project">Project</Nav.Item>
                <Nav.Item as={Link} to="/#skills">Skills</Nav.Item>
                <Nav.Item as={Link} to="/#blog">Blog</Nav.Item>
                <Nav.Item as={Link} to="/#contact">Contact</Nav.Item>
            </div>

            <div className="social-links">
                <a href="#" target="_blank"> <FaFacebookSquare /> </a>
                <a href="#" target="_blank"> <FaTwitterSquare /> </a>
                <a href="#" target="_blank"> <FaLinkedinIn /> </a>
                <a href="#" target="_blank"> <FaStackOverflow /> </a>
                <a href="#" target="_blank"> <FaGithubSquare /> </a>
                <a href="#" target="_blank"> <FaBehanceSquare /> </a>
                <a href="#" target="_blank"> <FaCodepen /> </a>
            </div>
        </Nav> 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
