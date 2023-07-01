import { Button } from 'bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./signin.css"

function FormFloatingBasicExample() {
  return (
    <div className='in'>
      <h1>Đăng Nhập</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
        <div className='sign'>
        <Link ><a className='sig'>ĐĂNG NHẬP</a></Link>
        <Link to="/Signup"><a className='sig'>ĐĂNG KÝ</a></Link>
        </div>
       
      </FloatingLabel>
    </div>
  );
}

export default FormFloatingBasicExample;