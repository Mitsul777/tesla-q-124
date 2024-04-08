import MainPage from "../pages/MainPage/MainPage";
import MainPage100 from "../pages/MainPage/MainPage100";
import MainPage30 from "../pages/MainPage/MainPage30";
import MainPage50 from "../pages/MainPage/MainPage50";

export const routes = [

    { path: '/100', element: MainPage100 },
    { path: '/:lang/100', element: MainPage100 },
    { path: '/30', element: MainPage30 },
    { path: '/:lang/30', element: MainPage30 },
    { path: '/50', element: MainPage50 },
    { path: '/:lang/50', element: MainPage50 },
    { path: '/:lang/', element: MainPage },
    { path: '*', element: MainPage },
    { path: '/:lang/index', element: MainPage },
    { path: '/index', element: MainPage },
    { path: '*', element: MainPage },

];

export const headerRoutes = [
    { id: 1, path: '/trading', text: 'header_trading' },
    { id: 2, path: '/accounts', text: 'header_accounts' },
    { id: 3, path: '/education', text: 'header_education' },
    { id: 4, path: '/support', text: 'header_support' },
    { id: 5, path: '/about', text: 'header_about' },
];
