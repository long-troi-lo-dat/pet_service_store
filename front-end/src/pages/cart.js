import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import '../assets/css/global3.css';

function Cart({ setShowCart, cart, setCart }) {
  const [tongtien, setTongTien] = useState(0)
  const [hoten, setHoten] = useState('');
  const [sodienthoai, setSodienthoai] = useState('');
  const [diachi, setDiachi] = useState('');
  const [ghichu, setGhichu] = useState('');
  const [id_user, setid_user] = useState('');

  const thaydoisoluong = (sanpham, sl) => {
    const idx = cart.indexOf(sanpham);
    const arr = [...cart];
    arr[idx].amount += sl
    if (arr[idx].amount === 0) arr[idx].amount = 1;
    setCart([...arr]);
  }
  const removeProduct = (sanpham) => {
    const arr = cart.filter(sp => sp.id_sp !== sanpham.id_sp);
    setCart([...arr])
  }
  // const tinhtongtien = () => {
  //   let tt = 0;
  //   cart.map(item => {
  //     tt += item.gia * item.amount
  //   })
  //   setTongTien(tt);
  // }

  const onSubmitOrder = async (cart, hoten, sodienthoai, diachi, ghichu, tongtien, id_user) => {
    try {
      const response = await axios.post('http://localhost:8000/add-to-mysql', {
        hoten: JSON.stringify(hoten),
        sodienthoai: JSON.stringify(sodienthoai),
        diachi: JSON.stringify(diachi),
        ghichu: JSON.stringify(ghichu),
        tongtien: JSON.stringify(tongtien),
        id_user: JSON.stringify(id_user),
        cart: JSON.stringify(cart),
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding to MySQL:', error);
    }
  }

  const tinhtongtien = () => {
    const tt = cart.reduce((total, item) => total + item.gia * item.amount, 0);
    setTongTien(tt);
  };
  useEffect(() => {
    tinhtongtien()
  })
  const onCloseCartHandler = () => {
    setShowCart(false)
  }
  return (
    <div className="sv__coverfull m-auto py-8">
      <div className="row">
        <div className='col-xl-5 col-lg-7'>
          <h5 class="h2 mb-0 text-gray-800">Thông tin giao hàng</h5>
          <span>Các trường được đánh dấu <span className="text-danger">*</span> là bắt buộc</span>
          <div className="row g-3 mt-2">
            <div class="col-12">
              <label for="hoten" class="form-label">Họ tên <span className="text-danger">*</span></label>
              <input type="text" class="form-control" id="hoten" name="hoten" value={hoten} onChange={(e) => setHoten(e.target.value)} placeholder="Họ và tên" />
            </div>
            <div class="col-12">
              <label for="sodienthoai" class="form-label">Số điện thoại <span className="text-danger">*</span></label>
              <input type="text" class="form-control" id="sodienthoai" name="sodienthoai" value={sodienthoai} onChange={(e) => setSodienthoai(e.target.value)} placeholder="Số điện thoại" />
            </div>
            <div class="col-md-12">
              <label for="diachi" class="form-label">Địa chỉ <span className="text-danger">*</span></label>
              <input type="text" class="form-control" id="diachi" name="diachi" value={diachi} onChange={(e) => setDiachi(e.target.value)} placeholder="Địa chỉ nhận hàng" />
            </div>
            <div class="col-12">
              <label for="ghichu" class="form-label">Ghi chú</label>
              <textarea class="form-control" id="ghichu" name="ghichu" value={ghichu} onChange={(e) => setGhichu(e.target.value)} rows="7" placeholder='Ghi chú cho cửa hàng để có thể hỗ trợ bạn hết sức có thể...'></textarea>
            </div>
          </div>
          <button class="btn btn-success mt-4 bg-success" onClick={onSubmitOrder}>Gửi xác nhận</button>
          <button class="btn btn-info mt-4 bg-info" style={{ marginLeft: "20px" }} onClick={onCloseCartHandler}>Tiếp tục mua sắm</button>
        </div>
        <div className="col-xl-7 col-lg-7">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Danh sách sản phẩm trong giỏ hàng</h6>
            </div>
            <div class="card-body">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th style={{}}>Hình ảnh</th>
                    <th style={{ width: "100px" }}>Tên sản phẩm</th>
                    <th style={{ width: "100px" }}>Giá</th>
                    <th style={{ width: "100px" }}>Số lượng</th>
                    <th style={{ width: "140px" }}>Thành tiền</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, i) => (
                    <tr>
                      <td style={{}}><img src={item.hinhanh} alt='img' /></td>
                      <td style={{}}>{item.ten}</td>
                      <td style={{}}>{item.gia.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                      <td style={{ textAlign: "center" }}><div><button onClick={() => thaydoisoluong(item, -1)}>-</button><input type="text" style={{ width: "100%" }} value={item.amount} readOnly={true} className='text-center' /><button onClick={() => thaydoisoluong(item, 1)}>+</button></div></td>
                      <td style={{}}>{(item.gia * item.amount).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                      <td><button onClick={() => removeProduct(item)}>Xóa</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>Tổng số tiền: {tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Cart;