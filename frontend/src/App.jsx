import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
import UserAuthForm from './pages/userAuthForm.page';
import { createContext, useEffect, useState } from 'react';
import { lookInSession } from './common/session';
import HomePage from './pages/home.page';
import PageNotFound from './pages/404.page';
import UserForgotPassword from './pages/userForgotPassword.page';
import ResetPassword from './pages/reset-password.page';
import WeatherPage from './pages/weather.page';

export const UserContext = createContext({});

export const ThemeContext = createContext({});

const darkThemePreference = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  const [userAuth, setUserAuth] = useState(() => {
    const userInSession = lookInSession('user');
    return userInSession ? JSON.parse(userInSession) : { access_token: null };
  });

  const [theme, setTheme] = useState(()=> darkThemePreference() ? 'dark' : 'light');

  useEffect(() => {
    let userInSession = lookInSession('user');
    let themeInSession = lookInSession('theme');

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null });

    themeInSession
      ? setTheme(() => {
          document.body.setAttribute('data-theme', themeInSession);
          return themeInSession;
        })
      : document.body.setAttribute('data-theme', theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path='/signin' element={<UserAuthForm type='sign-in' />} />
            <Route path='/signup' element={<UserAuthForm type='sign-up' />} />
            <Route path='/userforgotpassword' element={<UserForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/weather' element={<WeatherPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
