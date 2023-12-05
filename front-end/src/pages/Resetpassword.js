import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Resetpassword() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    var emailFromLocal = localStorage.getItem("EmailUserForget");

    const doimatkhau = () => {
        axios.post(`http://localhost:8000/doimatkhau`, { emailFromLocal, password })
            .then((response) => {
                console.log(response.data)
                axios.post('http://localhost:8000/login', { email: emailFromLocal, password: password })
                    .then(
                        res => {
                            localStorage.setItem("vaitro", res.data[0].vaitro)
                            localStorage.setItem("id_user", res.data[0].id_user)
                            localStorage.setItem("login", "yes")
                            navigate("/")
                        }
                    )
                    .catch(
                        err => console.log(err)
                    )
                // navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <Navbar />
            {/* <h2>Nhập mật khẩu mới</h2>
            <input type="password" placeholder="Nhập mật khẩu mới" name="matkhaumoi" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={doimatkhau}>Thay đổi mật khẩu</button> */}
            <div>
                <div class="container" style={{}}>
                    <div class="card text-center" style={{ width: "600px", margin: "100px auto" }}>
                        <div class="card-header h5 text-white" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Tạo mật khẩu mới</div>
                        <div class="pt-3">
                            <p>Vui lòng nhập mật khẩu mới</p>
                        </div>
                        <div class="card-body px-5 ">
                            <input type="password" placeholder="Nhập mật khẩu mới" name="matkhaumoi" onChange={(e) => setPassword(e.target.value)} style={{ padding: "10px 5px" }} />
                            <div class="d-flex justify-content-between mt-6 pt-3">
                                <button onClick={doimatkhau} class="btn btn-primary w-100" style={{ backgroundColor: "rgb(34, 42, 99)" }}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resetpassword