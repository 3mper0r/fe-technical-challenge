
import './MyInput.css'

const MyInput = ({ className }:any) => {
  return <input className={`my-input ${className}`}  placeholder='Text'/>;
};

export default MyInput;