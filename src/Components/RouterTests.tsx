import React from 'react';
import {NavLink, Outlet, Route, Routes, useNavigate, useParams} from 'react-router-dom';

const Profile = () => {
    // const params = useParams<'*'>()
    // const some = params['*']
    // console.log(some)
    const navigate = useNavigate()

    return <div>
        Profile 1
        <button onClick={()=>navigate('/login')}>Log out</button>
    </div>
}


const RouterTests = () => {
    return (
        <div>
            <NavLink to={'/'}>Main</NavLink>
            <NavLink className={({isActive})=>isActive? "activeLink" : 'defaultLink'} to={'/login'}>Login</NavLink>
            <NavLink style={({isActive})=>{
                return (
                    isActive? {color: 'lime'} : {color: 'black'}
                )
            }} to={'/profile'}>Profile</NavLink>
            <NavLink to={'/profile/settings'}>Settings</NavLink>

            <Routes>
                <Route path={'/'} element={<div>Main</div>}/>
                <Route path={'login'} element={<div>Login</div>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/profile/settings'} element={<div>Settings</div>}/>
                {/*<Route path={'/*'} element={<div>Not found: 404</div>}/>*/}
            </Routes>
        </div>
    );
};

export default RouterTests;