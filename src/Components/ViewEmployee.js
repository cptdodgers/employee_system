import React from 'react'
import { Button, Checkbox, Table, Typography } from 'antd';


const { Title } = Typography;

export const ViewEmployee = () => {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };


    const dataSource = [
        {
          key: '1',
          name: 'Jone',
          sname: 'Doe',
          designation : 'Engineer',
          active : <Checkbox onChange={onChange}></Checkbox>,
          edit : <Button style={{color:"#64BFB6", borderBlockColor:"#64BFB6", borderRadius:"5px", padding:"0px 20px"}}>Edit</Button>,
          deactivate : <Button danger style={{borderRadius:"5px"}}>Deactivate</Button>
        },
        {
          key: '2',
          name: 'Kamal',
          sname: 'Silva',
          designation : 'Manager',
          active : <Checkbox onChange={onChange}></Checkbox>,
          edit : <Button style={{color:"#64BFB6", borderBlockColor:"#64BFB6", borderRadius:"5px", padding:"0px 20px"}}>Edit</Button>,
          deactivate : <Button danger style={{borderRadius:"5px"}}>Deactivate</Button>
        },
        {
            key: '3',
            name: 'Peter',
            sname: 'Doe',
            designation : 'Doctor',
            active : <Checkbox onChange={onChange}></Checkbox>,
            edit : <Button style={{color:"#64BFB6", borderBlockColor:"#64BFB6", borderRadius:"5px", padding:"0px 20px"}}>Edit</Button>,
            deactivate : <Button danger style={{borderRadius:"5px"}}>Deactivate</Button>
          },
          {
            key: '4',
            name: 'Supun',
            sname: 'Silva',
            designation : 'Engineer',
            active : <Checkbox onChange={onChange}></Checkbox>,
            edit : <Button style={{color:"#64BFB6", borderBlockColor:"#64BFB6", borderRadius:"5px", padding:"0px 20px"}}>Edit</Button>,
            deactivate : <Button danger style={{borderRadius:"5px"}}>Deactivate</Button>
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
          },
          {
            title: '',
            dataIndex: 'deactivate',
            key: 'deactivate',
          },
      ];
      
  return (
    <div className='viewemp' style={{margin:"20px"}}>
         <Title style={{margin:"10px"}} level={3}>Employee List</Title>
         <Table dataSource={dataSource} columns={columns} pagination={false} />;


    </div>
  )
}
