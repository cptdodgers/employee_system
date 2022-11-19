
import { Button, Checkbox, Table, Typography,message, Popconfirm } from 'antd';
import "./styles.css";
import "antd/dist/antd.css";
import { EditEmployee } from './EditEmployee';
import { Modal, Space } from 'antd';
import React,{ useState } from 'react';
import {useNavigate} from "react-router-dom"


const { Title } = Typography;

export const ViewEmployee = () => {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

      const navigate=useNavigate()
  
      const routeChange = () =>{ 
        let path = `/edit`; 
        navigate("/edit")
      }



    const onDeactive = ()=>{
      Modal.confirm({
        title : "Are you sure you want to deactive this employee ?"
      })
    }
    

    const dataSource = [
        {
          key: '1',
          name: 'Jone',
          sname: 'Doe',
          designation : 'Engineer',
          active : <Checkbox onChange={onChange}></Checkbox>,
        },
        {
          key: '2',
          name: 'Kamal',
          sname: 'Silva',
          designation : 'Manager',
          active : <Checkbox onChange={onChange}></Checkbox>,
        },
        {
            key: '3',
            name: 'Peter',
            sname: 'Doe',
            designation : 'Doctor',
            active : <Checkbox onChange={onChange}></Checkbox>,
          },
          {
            key: '4',
            name: 'Supun',
            sname: 'Silva',
            designation : 'Engineer',
            active : <Checkbox onChange={onChange}></Checkbox>,
          },
          {
            key: '5',
            name: 'Peter',
            sname: 'Doe',
            designation : 'Doctor',
            active : <Checkbox onChange={onChange}></Checkbox>,
          },
          {
            key: '6',
            name: 'Supun',
            sname: 'Silva',
            designation : 'Engineer',
            active : <Checkbox onChange={onChange}></Checkbox>,
          },
          {
            key: '7',
            name: 'Peter',
            sname: 'Doe',
            designation : 'Doctor',
            active : <Checkbox onChange={onChange}></Checkbox>,
          },
          {
            key: '8',
            name: 'Supun',
            sname: 'Silva',
            designation : 'Engineer',
            active : <Checkbox onChange={onChange}></Checkbox>,
          },
      ];
      
      const columns = [
        {
          title: 'First Name',
          dataIndex: 'name',
          key: 'name',
  
        },
        {
          title: 'Last Name',
          dataIndex: 'sname',
          key: 'sname',
        },
        {
          title: 'Designation',
          dataIndex: 'designation',
          key: 'designation',
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
          },
          {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            width: 80,

            render : (record)=>{
              return(
              
                <Button style={{color:"#64BFB6", borderBlockColor:"#64BFB6", borderRadius:"5px"}} onClick={routeChange}>Edit</Button>

            
              )
            }
          },
          {
            title: '',
            dataIndex: 'deactivate',
            key: 'deactivate',
            render : (record)=>{
              return(
              
                <Button danger style={{borderRadius:"5px"}}
                onClick={onDeactive}
                >Deactivate</Button>

            
              )
            }
          },

      ];
      
  return (
    <div className='viewemp' style={{margin:"20px"}}>
         <Title style={{margin:"10px"}} level={3}>Employee List</Title>
         <Table dataSource={dataSource} columns={columns} pagination={false} rowClassName={() => ".ant-table-thead > tr > th"} />;
        

    </div>
  )
}
