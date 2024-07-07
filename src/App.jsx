import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import About from './pages/landing/components/about'
import ContactUs from './pages/contact-us'
import RootLayout from './layouts/rootLayout'
import Collection from './pages/landing/components/collection'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
      children: [
        {
          
          index: true,
          element: <LandingPage/>,
        },
        {
          path: "about-us",
        element: <About/>,
        },
        {
          path: "collection",
          element: <Collection/>,
        },
        {
          path: "contact-us",
          element: <ContactUs/>,
        },
      ]
    }
   
  ])
  return <RouterProvider router={router}/>;
}

export default App
