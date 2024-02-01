import Dashboard from "pages/dashboard/Dashboard";
import Root from "./pages/Root";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Login from "pages/login/Login";
import Page_1 from "pages/login/Page_1";
import Home from "pages/dashboard/Home";
import Login_Form from "pages/dashboard/Login_Form";
// import App_bar from "pages/login/App_bar";




const router = createBrowserRouter(
  createRoutesFromElements(
    <><Route path="/" element={<Root />}>

      <Route index element={< Home />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      
      {/* <Route path="app_bar" element={<App_bar />}></Route> */}

      {/* ... etc.*/}

    </Route>
    <Route path="login" element={<Login />}></Route>
    <Route path="login_form" element={<Login_Form />}></Route>
    <Route path="page_1" element={<Page_1 />}></Route>
    </>
    

    
    
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
