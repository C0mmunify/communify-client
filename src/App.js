import React from 'react';
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Pages.Homepage />}>
                </Route>
                <Route path='/login' element={<Pages.Login />}>
                </Route>
                <Route path='/profile' element={<Pages.Profile />}>
                </Route>
                <Route path='/register' element={<Pages.Register />}>
                </Route>
                <Route path='/newevent' element={<Pages.NewEvents />}>
                </Route>
                <Route path='/events' element={<Pages.Events />}>
                </Route>
            </Routes>
        </main>
    )
}

export default App;
