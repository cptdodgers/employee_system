import './App.css';
import "antd/dist/antd.css";
import {useNavigate} from "react-router-dom"

import {Menu} from "antd"
import { Routing } from './Routing';
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

function App() {
  const navigate=useNavigate()
  return (
    <div style={{display :'flex', flexDirection:'row', width:'100%'}}>
      
      <Menu
      onClick={({key}) =>{
        navigate(key)

      }}
      items={[
        {label :"Create Employee" ,key:"/create", icon :<UserAddOutlined />},
        {label :"View Employee" ,key:"/list", icon :<TeamOutlined />},

      ]}>

      </Menu>
     <Routing/>
    </div>
  );
}

export default App;
