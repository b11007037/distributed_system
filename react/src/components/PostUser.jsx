import axios from "axios";
import { useState } from "react";

const PostUser = () => {
    const [user, setUser] = useState({//變數託管(setUser由react託管)
        name:'',
        age:'',
        email:'',
    });
    const createUser = async () => {
        await axios.post("http://localhost:8080/api/form",
        user, 
        {
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
        .then((respons)=>{
            setUser({name: '',age: '',email: '',}) //清空
            console.log(response);
            return alert("User Created: " + `${JSON.stringify(respons.data,null,4)}`);
        })
        .catch((err)=>{
            return alert(err)
        });
    };


    // === 一定要一樣，避免誤有相似的誤判
    const onChangeForm = (e) => {
        if(e.target.name === 'name') {
            setUser({...user, name:e.target.value})
        }else if(e.target.name === 'age'){
            setUser({...user, age:e.target.value})
        }else if(e.target.name === 'email'){
            setUser({...user, email:e.target.value})
        }
    };
    
    return (
        <div>
        <div>
            <div>
                <h1>Create User</h1>
                <form>
                    <div>
                    <div>
                        <label>Name</label>
                        <input type="text" value={user.name} onChange={()=>onChangeForm} name="name" id="id" placeholder="Name"/>
                    </div>

                    <div>
                        <label>Age</label>
                        <input type="text" value={user.age} onChange={()=>onChangeForm} name="age" id="age" placeholder="Age"/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text" value={user.email} onChange={()=>onChangeForm} name="email" id="email" placeholder="email"/>
                    </div>
                    </div>
                    <button type="bottun" onClick={()=>createUser()}>Create</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default PostUser;