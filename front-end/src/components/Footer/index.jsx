import React from "react";
import LogoHeader from "../../assets/logo-1.png";

function Footer(props) {
  return (
    <footer>
      <div className="container-fluid text-center py-2 marquee" style={{ color: "#41403E", backgroundColor: "#f9f3ec" }}>
        <p className="m-0 d-none d-md-block">
          Hotline hỗ trợ 24/7 của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc
          của bạn | 077 766 3476
        </p>
        <p className="m-0 d-md-none d-block">
          Hotline hỗ trợ của chúng tôi | 077 766 3476
        </p>
      </div>
      <div className="container my-2">
        <div className="row">
          <div className="col-12 col-lg-3">
            <img src={LogoHeader} alt="" className="img-fluid" />
            <p className="small text-justify">
              DG House ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta. Với nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Khách sạn thú cưng, Dịch vụ thú cưng tại nhà,…
            </p>
          </div>
          <div className="col-6 col-lg-3">
            <h3 style={{ height: "62px", lineHeight: "62px" }}>
              Dịch vụ
            </h3>
            <ul style={{ fontSize: "13px" }}>
              <li className="mb-2">
                Spa chuẩn thú cưng 5 sao
              </li>
              <li className="mb-2">
                Dịch vụ cắt tỉa lông
              </li>
              <li className="mb-2">
                Dịch vụ hotel thú cưng
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h3 style={{ height: "62px", lineHeight: "62px" }}>
              Truy cập
            </h3>
            <ul style={{ fontSize: "13px" }}>
              <li className="mb-2">
                Giới thiệu về DG House
              </li>
              <li className="mb-2">
                Chia sẻ kiến thức và kinh nghiệm
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <img src={process.env.REACT_APP_URL_API + "/footer/logo-da-thong-bao-voi-bo-cong-thuong.png"} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;
