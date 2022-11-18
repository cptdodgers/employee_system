import "antd/dist/antd.css";
import {Table, Checkbox, columns} from "antd";
import { useState } from "react";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

export const viewdelettest = () => {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };


const [dateSource, setDataSurce] = useState([
    {
        fname:'Jhon',
        lname:'Doe',
        designation:'Engineer',
        active :<Checkbox onChange={onChange}></Checkbox>,
    },
    {
        fname:'Kamal',
        lname:'Silva',
        designation:'Director of Marketing',
        active :<Checkbox onChange={onChange}></Checkbox>,
    },
    {
        fname:'Namal',
        lname:'Rodrigo',
        designation:'Manager',
        active :<Checkbox onChange={onChange}></Checkbox>,
    },
    {
        fname:'Supun',
        lname:'Silva',
        designation:'Marketing manager',
        active :<Checkbox onChange={onChange}></Checkbox>,
    },
    {
        fname:'Peter',
        lname:'Doe',
        designation:'Engineer',
        active :<Checkbox onChange={onChange}></Checkbox>,
    }
])
const column =[
    {
        key:'1',
        title:'First Name',
        dataIndex:'fname',
    },
    {
        key:'2',
        title:'Last Name',
        dataIndex:'lname',
    },
    {
        key:'3',
        title:'Designation',
        dataIndex:'designation',
    },
    {
        key:'4',
        title:'Active',
        dataIndex:'active',
    },
    {
        key:'5',
        title:'Action',
        render:(record)=>{
            return <>
            <EditOutlined/>
            <DeleteOutlined style={{color:"red", marginleft:"20px"}}/>
            </>
        }
    }
]

return (
<div className="viewdelettest">
    <header className="view-header">
        <Table
        columns={columns}
        dataSource={dateSource}
        >

        </Table>
    </header>
</div>
);
}