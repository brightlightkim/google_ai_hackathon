import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.component';
import UserAuthForm from './pages/userAuthForm.page';
import { createContext, useEffect, useState } from 'react';
import { lookInSession } from './common/session';
import HomePage from './pages/home.page';
import PageNotFound from './pages/404.page';
import UserForgotPassword from './pages/userForgotPassword.page';
import ResetPassword from './pages/reset-password.page';
import Map from './components/map.component';
import WeatherPage from './pages/weather.page';
import TravelPlanPage from './pages/travel-plan.page';
import ExperiencePage from './pages/experience.page';

export const UserContext = createContext({});

export const ThemeContext = createContext({});

export const TravelPlanContext = createContext({});

const darkThemePreference = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  const [userAuth, setUserAuth] = useState(() => {
    const userInSession = lookInSession('user');
    return userInSession ? JSON.parse(userInSession) : { access_token: null };
  });

  const [theme, setTheme] = useState(() =>
    darkThemePreference() ? 'dark' : 'light'
  );

  const [travelPlan, setTravelPlan] = useState({});

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
        <TravelPlanContext.Provider value={{ travelPlan, setTravelPlan }}>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<HomePage />} />
              <Route path='/travel_plan' element={<TravelPlanPage />} />
              <Route path='/experience' element={<ExperiencePage />} />
              <Route path='/signin' element={<UserAuthForm type='sign-in' />} />
              <Route path='/signup' element={<UserAuthForm type='sign-up' />} />
              <Route
                path='/userforgotpassword'
                element={<UserForgotPassword />}
              />
              <Route path='/reset-password' element={<ResetPassword />} />
              <Route path='/weather' element={<WeatherPage />} />
              <Route path='/map' element={<Map />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        </TravelPlanContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
