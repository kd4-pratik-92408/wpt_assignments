import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import ChangePassword from './Components/ChangePassword';
import Register from './Components/Register';
import UpdateProfile from './Components/UpdateProfile';
import FoodGallary from './Components/FoodGallary';
import AuthProvider from './Providers/AuthProvider';
import ThemeProvider from './Providers/ThemeProvider';
import UserLayout from './Components/USerLayout';
import ProtectedRoute from './Components/ProtectedRoute';
import ChangeTheme from './Components/ChangeTheme';
import Logout from './Components/Logout';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';
import FoodItemForm from './Components/FoodItemForm';



function App() {
  return <>
  <AuthProvider>
    <ThemeProvider>
          <Routes>
            <Route index element=<Login/> />
            <Route path='/login' element=<Login/> />
            <Route path='/register' element=<Register/> />
            <Route path="/logout" element=<Logout/> />
            {/* <Route path='/user/dashboard' element=<Dashboard/> /> */}
            <Route path='/user' element=<UserLayout/> >
            <Route path='dashboard' element=<ProtectedRoute>
            <Dashboard/>
            </ProtectedRoute> />

            <Route path='foods' element=<ProtectedRoute>
            <FoodGallary/>
            </ProtectedRoute> />
            <Route path='theme' element=<ProtectedRoute>
            <ChangeTheme/>
            </ProtectedRoute> />
            <Route path='profile' element=<ProtectedRoute>
            <UpdateProfile/>
            </ProtectedRoute> />
            <Route path='changepassword' element=<ProtectedRoute>
            <ChangePassword/>
            </ProtectedRoute> />
            <Route path='addfood' element=<ProtectedRoute>
            <FoodItemForm/>
            </ProtectedRoute> />
            </Route>
            {/* <Route path='*' element=<NotFound/> /> */}
      </Routes>

    </ThemeProvider>

  </AuthProvider>



    
    </>

}

export default App
