import React from 'react'
import {Layout, SEO, Header, Works} from '../components';

import '../styles/theme.css';

const Projects = () => {
    return ( 
        <Layout>
            <SEO title="Home" />
            <div id="sidebar-wrapper"> 
                <Header />
            </div>
            <div id="content-wrapper"> 
                <Works />
            </div>
        </Layout>
     );
}
 
export default Projects;