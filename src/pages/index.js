import React from "react" 

import {  Layout, SEO, Header, Welcome, About, Footer} from '../components';


import '../styles/theme.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="sidebar-wrapper"> 
      <Header />
    </div>
    <div id="content-wrapper">
      <Welcome />
      <About />
      <Footer />
    </div>
  </Layout>
)

export default IndexPage
