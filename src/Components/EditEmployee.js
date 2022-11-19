import React, { useState } from "react";
import {Button, Checkbox,message, Form, Input, Row, Table, Typography, Select, Col, DatePicker, Dropdown, Upload} from "antd";
import {Dialog} from "primereact/dialog";
import Avatar from "react-avatar-edit";
import img from "./images.png";

const { Title } = Typography;

export const EditEmployee = () => {
    const { Option } = Select;
  const [form] = Form.useForm();

  const [dialogs, setdialogs] = useState(false);
const [imgCrop, setimgCrop] = useState(false);

const onCrop=(view)=>{
  setimgCrop(view)
}
const onClose=()=>{
  setimgCrop(null)
}


const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
  
  return (
    <div className="createmp" style={{margin:"20px"}}>
      <Title style={{margin : "10px", paddingBottom:"20px"}} level={3}>Edit Employee</Title>

      <Form labelCol={{span:14}} form={form} layout="vertical" style={{margin : "10px", width:"100%"}}>
        <Row gutter={[15]}>
          <Col style={{width:"50%"}}>
            <Form.Item name="FirstName" label="First Name" rules={[
              {
                required: true,
                message: "Please Enter Your First Name",
              },
              {whitespace: true},
              {min: 2},
            ]}
            hasFeedback
            >
              
              <Input placeholder="Enter First Name" />
            </Form.Item>
          </Col>
          <Col style={{width:"50%"}}>


            <Form.Item name="LastName" label="Last Name" rules={[
              {
                required: true,
                message: "Please Enter Your Last Name",
              },
              {whitespace: true},
              {min: 2},
            ]}
            hasFeedback
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
          </Col>
        </Row>


        <Row gutter={[15]}>
          <Col style={{width:"25%"}}>
            <Form.Item label="Title" name={"title"} rules={[
              {required: true,
              message:"Please select Your Job Title"}
            ]}>
            <Select
            placeholder="-Subject"
          >
            <Option value="Subject1">Subject 1</Option>
            <Option value="Subject2">Subject 2</Option>
            <Option value="Subject3">Subject 3</Option>
          </Select>
            </Form.Item>
          </Col>
          <Col style={{width:"25%"}}>
            <Form.Item label="Gender" name="gender" rules={[
              {required:true,
              message:"Please select your Gender"},
            ]}>
            <Select
            placeholder="Gender"
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
            </Form.Item>
          </Col>
          <Col style={{width:"25%"}}>
            <Form.Item label="NIC" name="nic" rules={[
              {required:true,
              message:"Please Enter Your NIC!"},
              {type:"number",
            message:"Please Enter a Valid NIC witout letter V "},
            ]}
            hasFeedback
            >
              <Input placeholder="Enter NIC Number" />
            </Form.Item>
          </Col>
          <Col style={{width:"25%"}}>
            <Form.Item label="Date if Birth">
              <DatePicker picker="1990/09/12" placeholder="1990/09/12" style={{width:"100%"}} />
            </Form.Item>
          </Col>
        </Row>



        <Row gutter={[15]}>
          <Col style={{width:"50%"}}>
            <Form.Item name="cnumber" label="Contact Number" rules={[
              {type:"number",
            message:"Please Enter a Valid Number"},
            ]}
            hasFeedback
            >
              <Input placeholder="Enter Contact Number" />
            </Form.Item>
          </Col>

          <Col style={{width:"50%"}}>
            <Form.Item name="email" label="Email"rules={[
              {type:"email", message:"Please enter a Valid email address"},
            ]}
            hasFeedback
            >
              <Input placeholder="Enter An Email" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[15]}>
          <Col style={{width:"33%"}}>
            <Form.Item name={"department"} label="Department"rules={[
              {required: true,
              message:"Please select Your Job Department"}
            ]}>
            <Select placeholder="-Select"
          >
            <Option value="Subject1">Subject 1</Option>
            <Option value="Subject2">Subject 2</Option>
            <Option value="Subject3">Subject 3</Option>
          </Select>
            </Form.Item>
          </Col>

          <Col style={{width:"33%"}}>
            <Form.Item name={"designation"} label="Designation" rules={[
              {required: true,
              message:"Please select Your Designation"}
            ]}>
            <Select placeholder="-Select-"
          >
            <Option value="A">A</Option>
            <Option value="B">B</Option>
          </Select>
            </Form.Item>
          </Col>

          <Col style={{width:"34%"}}>
            <Form.Item label="Nationality" name={"nationality"}>
            <Select placeholder="-Select-"
          >
            <Option value="A">A</Option>
            <Option value="B">B</Option>
          </Select>
            </Form.Item>
          </Col>
          
         
        
        </Row>
        
        <Form.Item name={"address"} label={"Adress"}>
            <Input placeholder="Enter Your Address"/>
          </Form.Item>

        <Row gutter={[15]}>
          <Col style={{width:"50%"}}>
            <Form.Item label="Country" name={"country"}>
            <Select placeholder="-Select-">
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
            </Select>
            </Form.Item>
          </Col>

          <Col style={{width:"50%"}}>
            <Form.Item label="City" name={"city"}>
            <Select placeholder="-Select-">
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
            </Select>
            </Form.Item>
          </Col>

        </Row>

        <Row gutter={[15]}>
          <Col style={{width:"30%"}}>
            <Form.Item className="propic" label="Profile Picture">
            <div className="div">
            <Upload {...props}>
                <img
                style={{
                  width:"150px",
                  height:"150px",
                  borderRadius:"50%",
                  objectFit:"cover",
                }}
                src={img}
                alt=""
                onClick={() => setdialogs(true)} 
                />
                </Upload>
                </div>
              {/* <div className="div" testing for the image croping effect in pro pic>
                <img
                style={{
                  width:"150px",
                  height:"150px",
                  borderRadius:"50%",
                  objectFit:"cover",
                }}
                src={img}
                alt=""
                onClick={() => setdialogs(true)} 
                />
                <Dialog
                visible={dialogs}
                header={() => (
                  <p htmlFor="" className="text-2x1 font-semibold textColor">
                    Profile Picture
                  </p>
                )}
                onHide={() => setdialogs(false)}>
                  <div className="confirmation-content flex flex-column align-item-center">
                    <div className="flex flex-column align-items-center mt-5 w-12">
                      <div className="flex justify-content-around w-12 mt-4">

                      <Avatar width={150} height={150} onClose={onCrop} onCrop={onClose} />

                        <Button label="Save"/>
                      </div>
                    </div>
                  </div>
                  </Dialog>
                  </div> */}
          </Form.Item>
          </Col>

          <Col style={{width:"70%"}}>
          <Form.Item name={"discription"} label={"Discription"}>
            <Input placeholder="Enter Discription" style={{
              maxLines:"4",
              height:"150px",
              lineHeight:"24px"
            }}/>
          </Form.Item>
          </Col>
        </Row>

        <Form.Item name={"remark"} label={"Remarks"}>
            <Input placeholder="Enter Remarks" 
            style={{
              maxLines:"3",
              height:"55px",
             
            }}
             />
          </Form.Item>

        <Form.Item name="Active">
          <Checkbox>Active</Checkbox>
        </Form.Item>
        
        <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{textAlign:"right"}}>
        <Button style={{margin:"10px", borderRadius: "4px", padding:"0px 20px", width:"100px"}} type="primary" htmlType="submit" >
          Update
        </Button>
        <Button style={{borderRadius: "4px", padding:"0px 20px", width:"100px", backgroundColor:"#FF850D", color:"#ffffff"}} type="" htmlType="reset">
          Reset
        </Button>
      </Form.Item>
      </Form>
    </div>
  );
};
