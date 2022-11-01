import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import BrowseThemes from './components/BrowseThemes';
import Capital from './components/Capital';
import DomainPage from './components/DomainPage';
import SignUp from './components/SignUp';
import Themes from './components/Themes';
import ThemesDetails from './components/ThemesDetails';
import ThemesHome from './components/ThemesHome';


function App() {
  const [theme,setTheme]=useState();
 
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Body/>}></Route>
    <Route path='/domainPage' element={<DomainPage/>}></Route>
    <Route path='/themes' element={<Themes/>}></Route>
    <Route path='/signUp' element={<SignUp/>}></Route>
    <Route path='/themesHome' element={<ThemesHome/>}></Route>
    <Route path='/browseThemes' element={<BrowseThemes setTheme={setTheme}/>}></Route>
    <Route path='/themesDetails' element={<ThemesDetails theme={theme}/>}></Route>
    <Route path='/capital' element={<Capital/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
