import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Error from '../Components/Error'
import Home from "../Pages/Home";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<Error error={'Page not Found'} />,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }
            ]
        }
    ]
)

export default router 