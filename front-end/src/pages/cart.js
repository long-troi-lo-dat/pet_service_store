import React from 'react';
import '../assets/css/cart.css';
import '../assets/css/global3.css';

function Cart(props) {
  return (
    <div className="sv__coverfull w-4/5 m-auto py-8">
      <div className="row">
        <div className='col-xl-5 col-lg-7'>
          <h5 class="h2 mb-0 text-gray-800">Thông tin giao hàng</h5>
          <span>Các trường được đánh dấu <span className="text-danger">*</span> là bắt buộc</span>
          <div className="row g-3 mt-2">
            <div class="col-12">
              <label for="hoten" class="form-label">Họ tên <span className="text-danger">*</span></label>
              <input type="text" class="form-control" id="hoten" placeholder="Họ và tên" />
            </div>
            <div class="col-12">
              <label for="sodienthoai" class="form-label">Số điện thoại <span className="text-danger">*</span></label>
              <input type="text" class="form-control" id="sodienthoai" placeholder="Số điện thoại" />
            </div>
            <div class="col-md-12">
              <label for="diachi" class="form-label">Địa chỉ <span className="text-danger">*</span></label>
              <input type="text" class="form-control" id="diachi" placeholder="Địa chỉ nhận hàng" />
            </div>
            <div class="col-12">
              <label for="ghichu" class="form-label">Ghi chú</label>
              <textarea class="form-control" id="ghichu" rows="7" placeholder='Ghi chú cho cửa hàng để có thể hỗ trợ bạn hết sức có thể...'></textarea>
            </div>
          </div>
          <button class="btn btn-success mt-4 bg-success" type="submit">Gửi xác nhận</button>
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
                    <th style={{ width: "20%" }}>Hình ảnh</th>
                    <th style={{ width: "30%" }}>Tên sản phẩm</th>
                    <th style={{ width: "15%" }}>Giá</th>
                    <th style={{ width: "15%" }}>Số lượng</th>
                    <th style={{ width: "20%" }}>Thành tiền</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "20%" }}><img src="https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-poodle-con-royal-canin-poodle-puppy1.jpg" alt='img' /></td>
                    <td style={{ width: "30%" }}>Thức ăn cho chó Poodle con ROYAL CANIN Poodle Puppy</td>
                    <td style={{ width: "15%" }}>175.000 đ</td>
                    <td style={{ width: "15%" }}><input type="number" style={{ width: "100%" }} className='text-center' value="1" /></td>
                    <td style={{ width: "20%" }}>175.000 đ</td>
                    <td>Xóa</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}><img src="https://www.petmart.vn/wp-content/uploads/2020/11/thuc-an-cho-cho-poodle-mkb-all-life-stages-formula-nutrition.jpg" alt='img' /></td>
                    <td style={{ width: "30%" }}>Thức ăn cho chó Poodle MKB All Life Stages Formula Nutrition</td>
                    <td style={{ width: "15%" }}>315.000 đ</td>
                    <td style={{ width: "15%" }}><input type="number" style={{ width: "100%" }} className='text-center' value="2" /></td>
                    <td style={{ width: "20%" }}>630.000 đ</td>
                    <td>Xóa</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}><img src="https://www.petmart.vn/wp-content/uploads/2015/11/xich-cho-cho-kem-vong-co-hand-in-hand-reflective-collar-leash.jpg" alt='img' /></td>
                    <td style={{ width: "30%" }}>Xích cho chó kèm vòng cổ HAND IN HAND Reflective Collar Leash</td>
                    <td style={{ width: "15%" }}>200.000 đ</td>
                    <td style={{ width: "15%" }}><input type="number" style={{ width: "100%" }} className='text-center' value="1" /></td>
                    <td style={{ width: "20%" }}>200.000 đ</td>
                    <td>Xóa</td>
                  </tr>
                  <tr>
                    <td colspan="2" style={{ width: "20%" }}></td>
                    <td colspan="2" style={{ width: "15%" }}>Tổng tiền: </td>
                    <td colspan="2" style={{ width: "20%" }}>1.005.000 đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="trang-gi-hng">
        <div class="gi-hng">GIỎ HÀNG</div>
        <div class="trang-gi-hng-inner"></div>
        <div class="rectangle-div"></div>
        <div class="trang-gi-hng-child1"></div>
        <div class="sn-phm">Sản phẩm</div>
        <div class="gi">Giá</div>
        <div class="s-lng">Số lượng</div>
        <div class="tm-tnh">Tạm tính</div>
        <img class="x-circle-icon" alt="" src="./public/xcircle.svg" />

        <img class="rectangle-icon" alt="" src="./public/rectangle-147@2x.png" />

        <div class="pate-lon-ch">
          Pate lon chó mèo [Cá Ngừ Trắng & Thịt Gà] 80g
        </div>
        <div class="div31">
          150.000
          <span class="span">đ</span>
        </div>
        <div class="div4">
          300.000
          <span class="span">đ</span>
        </div>
        <input type="number" class="vector-parent" />

        <input class="m-u-i-wrapper" placeholder="Mã ưu đãi" />

        <button class="p-dng-wrapper">ÁP DỤNG</button>
        <button class="cp-nhp-gi-hng-wrapper">CẬP NHẬP GIỎ HÀNG</button>
        <button class="tin-hnh-thanh-ton-wrapper" onclick="alert('Hello world!')">
          TIẾN HÀNH THANH TOÁN
        </button>
        <div class="trang-gi-hng-child2"></div>
        <div class="vn-chuyn-n-container">
          <span>Vận chuyển đến</span>
          <span class="h-ch-minh"> Hồ Chí Minh. </span>
        </div>
        <div class="cng-gi-hng">Cộng giỏ hàng</div>
        <div class="line-div"></div>
        <div class="trang-gi-hng-child3"></div>
        <div class="trang-gi-hng-child4"></div>
        <div class="trang-gi-hng-child5"></div>
        <div class="tm-tnh-parent">
          <div class="tng">Tạm tính :</div>
          <div class="div5">
            300.000
            <span class="span">đ</span>
          </div>
        </div>
        <div class="tng-parent">
          <div class="tng">Tổng :</div>
          <div class="div5">
            330.000
            <span class="span">đ</span>
          </div>
        </div>
        <div class="giao-hng-parent">
          <div class="tng">Giao hàng :</div>
          <div class="div5">
            30.000
            <span class="span">đ</span>
          </div>
        </div>
        <div class="i-a-ch">Đổi địa chỉ</div>
        <button class="tin-hnh-thanh-ton-wrapper" onclick="alert('Hello world!')">
          TIẾN HÀNH THANH TOÁN
        </button>
      </div> */}


    </div >
  );
}

export default Cart;