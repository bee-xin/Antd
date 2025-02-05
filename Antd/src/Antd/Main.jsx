/* import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";
import "./Main.css";
function Main() {
  const [data, setData] = useState();
  const onSubmit = (values) => {
    console.log(values);
    setData(values);
  };
  return (
    <div>
      <Form className="whole" onFinish={onSubmit}>
        <Form.Item name="username">
          <Input placeholder="Enter your Name" className="style" />
        </Form.Item>
        <Form.Item name="user_age">
          <Input placeholder="Enter your age" className="style" />
        </Form.Item>
        <Form.Item name="user_option">
          <Radio.Group>
            <Radio value={"Male"}>Male</Radio>
            <Radio value={"Female"}>Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
      <div className="result">
        <div>{data && data.username}</div>
        <div>{data && data.user_age}</div>
        <div>{data && data.user_option}</div>
      </div>
    </div>
  );
}

export default Main;
 */
