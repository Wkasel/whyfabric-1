import React from 'react';

import { Route } from 'react-router-dom';
import NewTheory from '../NewTheory/NewTheory';
import MyTheories from '../MyTheories/MyTheories';
import Stats from '../Stats/Stats';
import EditProfile from '../EditProfile/EditProfile';
import Glossary from '../Glossary/Glossary';

import './workarea.css'; 

const WorkArea = () => {
    return (
        <div>
           <Route path='/newTheory' component={NewTheory}/>
           <Route path='/myTheories' component={MyTheories}/>
           <Route path='/stats' component={Stats}/>
           <Route path='/editProfile' component={EditProfile}/>
           <Route path='/glossary' component={Glossary}/>
        </div>
    )
}
export default WorkArea;