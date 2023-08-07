import axios  from "axios";

export async function Login(data){
    return await axios.post('http://api_oh.udvc.ac.th/user/login',{
        email:data.email,
        password:data.password,
    })

}