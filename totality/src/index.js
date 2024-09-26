import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Cart from './component/cart'
// import Title from './component/Title'
import './App.css';
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer';
import BookMenue from './component/BookMenue';

// import BookMenue from './component/BookMenue';
import { Provider } from 'react-redux';
import store from './utils/Store';
 const App=()=> {
  return (
    <>
<Provider store={store}>
      <Header />

      <Outlet />
      {/* <Footer/> */}
</Provider>
    </>
  );
}



const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App />,
  
children:[
    {
      path:"/",
      element:<Body /> ,
    },
    {
      path:"/Cart",
      element:<Cart /> ,
    },
    {
        path:"/BooKMenue/:id0/:id1",
        element:<BookMenue />,
      },

]
  } ])
//     children:[
//       {
//         path:"/",
//         element:<Body /> ,
//       },
//       {
//         path:"/Cart",
//         element:<Cart />,
//       },
//       {
//         path:"/Sign",
//         element:<Title />,
//       },
//       {
//         path:"/BookMenue/:id0/:id1/:id2/:id3",
//         element:<BookMenue />,
//       },
//     ]}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
    // <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();