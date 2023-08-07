
import { redirect } from "react-router-dom";
import Shop from "../pages/Home/Shop"
import Home from "../pages/Home/home";
import { getProfileFX } from "../services/AuthenServices";


const shopRoute = [
    {
        path:"/home",
        loader: async()=>{
            const res = await getProfileFX();
            if(!res){
                throw redirect('/login');
            }
            localStorage.setItem('userdata',JSON.stringify (res.data.user));
            
            return res.data.user

        },

        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"shop",
                element:<Shop/>
            }
        ]
    }
]

export default shopRoute;