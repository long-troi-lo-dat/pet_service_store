import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from '../../axios';
//import "../../../src/assets/css/sb-admin-2.min.css";
import { Layout, Menu } from 'antd'
import { AreaChartOutlined } from '@ant-design/icons'
import imglogo from "../../assets/logo-1.png"
import { CSVLink } from "react-csv";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Chart from "react-apexcharts";
const { Sider } = Layout;

function QuanLyChiNhanhDatLich(props) {

    const id = localStorage.getItem("id_user")
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [dataUser, setDataUser] = useState([])
    const [dataDatLich, setdataDatLich] = useState([])
    const [openProfile, setOpenProfile] = useState(false)
    const [dataCartDetail, setDataCartDetail] = useState([]);
    const [selectNhanVien, setSelectNhanVien] = useState([])
    const [stateDonHang, setStateDonHang] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [],
            },
        },
        series: [],
    });
    const [stateDonHangChua, setStateDonHangChua] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [],
            },
        },
        series: [],
    });
    const [stateDonHangChuaExport, setStateDonHangChuaExport] = useState([])

    // const currentDay = (new Date()).getDate();

    const NextStatus = async (trangthai, id) => {
        axios.post(`/nextstatus`, {
            trangthai: trangthai,
            id: id
        })
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            })
    };

    const BackStatus = async (trangthai, id) => {
        axios.post(`/backstatus`, {
            trangthai: trangthai,
            id: id
        })
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            })
    };

    const SelectNV = async (nhanvien, id) => {
        axios.post(`/selectnhanvien`, {
            nhanvien: nhanvien,
            id: id
        })
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            })
    };

    const chonlocdonhang = (idNhanVien) => {
        axios.get(`/employee/nhanvien/${localStorage.getItem("chinhanh")}/${idNhanVien}`)
            .then((response) => {
                setdataDatLich(response.data)
                console.log(dataDatLich)
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }
    const chonlocdatlich = (trangthai) => {
        axios.get(`/employee/nhanvien/${localStorage.getItem("chinhanh")}/datlich/${trangthai}`)
            .then((response) => {
                setdataDatLich(response.data)
                console.log(dataDatLich)
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    }

    const handleShow = async (e) => {
        setShow(true)
        localStorage.setItem("idCartDetail", e.currentTarget.id)
        axios.get(`/detaildatlich?data=${e.currentTarget.id}`)
            .then((response) => {
                setDataCartDetail(response.data);
                // console.log(dataUser, "data user")
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
    };

    useEffect(() => {
        axios.get(`/userdetail/${id}`)
            .then((response) => {
                setDataUser(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`/AdminDatLich/${localStorage.getItem("chinhanh")}`)
            .then((response) => {
                setdataDatLich(response.data);
            })
            .catch((error) => {
                console.error('error fetching data :', error);
            });
        axios.get(`/thongke/chinhanh/${localStorage.getItem("chinhanh")}/dichvu/nhanvien/roi`)
            .then(response => {
                const data = response.data;

                console.log(data, "data trả về của thống kê dịch vụ nhân viên");

                const currentMonth = new Date().getMonth() + 1;

                let validNhanVienIds = [];
                let categories = [];

                if (localStorage.getItem("chinhanh") === '2') {
                    validNhanVienIds = [10, 11, 12];
                } else if (localStorage.getItem("chinhanh") === '3') {
                    validNhanVienIds = [13, 14];
                }

                categories = Array.from({ length: 5 }, (_, index) => {
                    const month = currentMonth - 2 + index;
                    const adjustedMonth = (month + 12) % 12 || 12;
                    return `Tháng ${adjustedMonth}`;
                });

                const seriesData = Array.from({ length: validNhanVienIds.length }, (_, index) => {
                    const nhanvienData = data.filter(item => item.nhanvien === validNhanVienIds[index]);

                    return {
                        name: (() => {
                            let ten;
                            switch (validNhanVienIds[index]) {
                                case 10:
                                    ten = "Đậu Quang Thái";
                                    break;
                                case 11:
                                    ten = "Tinh Hữu Từ";
                                    break;
                                case 12:
                                    ten = "Ngô Tấn Biên";
                                    break;
                                case 13:
                                    ten = "Hồ Nhất Huy";
                                    break;
                                case 14:
                                    ten = "Trần Anh Vũ";
                                    break;
                                default:
                                    ten = "Không xác định";
                            }
                            return ten;
                        })(),
                        data: categories.map(category => {
                            const monthIndex = parseInt(category.split(" ")[1]) - 1;
                            const monthData = nhanvienData.find(item => item.thang === monthIndex + 1);
                            return monthData ? monthData.so_don_hang : 0;
                        }),
                    };
                });

                const updatedState = {
                    options: {
                        chart: {
                            id: "basic-bar",
                        },
                        xaxis: {
                            categories: categories,
                        },
                    },
                    series: seriesData
                };

                setStateDonHang(updatedState);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });


        axios
            .get(`/thongke/chinhanh/${localStorage.getItem("chinhanh")}/dichvu/nhanvien/chua`)
            .then((response) => {
                const data = response.data;

                const currentMonth = new Date().getMonth() + 1;
                const currentDay = new Date().getDate();
                const daysToShow = 11;

                let categories = [];
                let validNhanVienIds = [];

                if (data.length > 0) {
                    // Determine the validNhanVienIds based on the available data
                    validNhanVienIds = Array.from(new Set(data.map(item => item.nhanvien)));

                    categories = Array.from(
                        { length: daysToShow },
                        (_, index) => currentDay + index
                    ).map((day) => `${day}/${currentMonth}`);
                }

                let seriesData;

                if (localStorage.getItem("chinhanh") === 2) {
                    seriesData = Array.from({ length: validNhanVienIds.length }, (_, index) => {
                        const nhanvienData = data.filter(
                            (item) => item.nhanvien === validNhanVienIds[index]
                        );

                        return {
                            name: (() => {
                                let ten;
                                switch (validNhanVienIds[index]) {
                                    case 10:
                                        ten = 'Đậu Quang Thái';
                                        break;
                                    case 11:
                                        ten = 'Tinh Hữu Từ';
                                        break;
                                    case 12:
                                        ten = 'Ngô Tấn Biên';
                                        break;
                                    default:
                                        ten = 'Không xác định';
                                }
                                return ten;
                            })(),
                            data: categories.map((category) => {
                                const dayIndex = parseInt(category.split('/')[0]) - 1;
                                const dayData = nhanvienData.find(
                                    (item) => item.ngaydat === dayIndex + 1
                                );
                                return dayData ? dayData.so_don_hang : 0;
                            }),
                        };
                    });
                } else if (localStorage.getItem("chinhanh") === 3) {
                    seriesData = Array.from({ length: validNhanVienIds.length }, (_, index) => {
                        const nhanvienData = data.filter(
                            (item) => item.nhanvien === validNhanVienIds[index]
                        );

                        return {
                            name: (() => {
                                let ten;
                                switch (validNhanVienIds[index]) {
                                    case 13:
                                        ten = 'Trần Anh Vũ';
                                        break;
                                    case 14:
                                        ten = 'Hồ Nhất Huy';
                                        break;
                                    default:
                                        ten = 'Không xác định';
                                }
                                return ten;
                            })(),
                            data: categories.map((category) => {
                                const dayIndex = parseInt(category.split('/')[0]) - 1;
                                const dayData = nhanvienData.find(
                                    (item) => item.ngaydat === dayIndex + 1
                                );
                                return dayData ? dayData.so_don_hang : 0;
                            }),
                        };
                    });
                }

                const updatedState = {
                    options: {
                        chart: {
                            id: 'basic-bar',
                        },
                        xaxis: {
                            categories: categories,
                        },
                    },
                    series: seriesData,
                };

                setStateDonHangChua(updatedState);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        axios
            .get(`/thongke/chinhanh/${localStorage.getItem("chinhanh")}/dichvu/nhanvien/chua`)
            .then((response) => {
                const data = response.data;

                const currentMonth = new Date().getMonth() + 1;
                const currentDay = new Date().getDate();
                const daysToShow = 11;

                let categories = [];
                let validNhanVienIds = [];

                if (data.length > 0) {
                    // Determine the validNhanVienIds based on the available data
                    validNhanVienIds = Array.from(new Set(data.map(item => item.nhanvien)));

                    categories = Array.from(
                        { length: daysToShow },
                        (_, index) => currentDay + index
                    ).map((day) => `${day}/${currentMonth}`);
                }

                let seriesData;

                if (localStorage.getItem("chinhanh") === 2) {
                    seriesData = Array.from({ length: validNhanVienIds.length }, (_, index) => {
                        const nhanvienData = data.filter(
                            (item) => item.nhanvien === validNhanVienIds[index]
                        );

                        return {
                            name: (() => {
                                let ten;
                                switch (validNhanVienIds[index]) {
                                    case 10:
                                        ten = 'Đậu Quang Thái';
                                        break;
                                    case 11:
                                        ten = 'Tinh Hữu Từ';
                                        break;
                                    case 12:
                                        ten = 'Ngô Tấn Biên';
                                        break;
                                    default:
                                        ten = 'Không xác định';
                                }
                                return ten;
                            })(),
                            data: categories.map((category) => {
                                const dayIndex = parseInt(category.split('/')[0]) - 1;
                                const dayData = nhanvienData.find(
                                    (item) => item.ngaydat === dayIndex + 1
                                );
                                return dayData ? dayData.so_don_hang : 0;
                            }),
                        };
                    });
                } else if (localStorage.getItem("chinhanh") === 3) {
                    seriesData = Array.from({ length: validNhanVienIds.length }, (_, index) => {
                        const nhanvienData = data.filter(
                            (item) => item.nhanvien === validNhanVienIds[index]
                        );

                        return {
                            name: (() => {
                                let ten;
                                switch (validNhanVienIds[index]) {
                                    case 13:
                                        ten = 'Trần Anh Vũ';
                                        break;
                                    case 14:
                                        ten = 'Hồ Nhất Huy';
                                        break;
                                    default:
                                        ten = 'Không xác định';
                                }
                                return ten;
                            })(),
                            data: categories.map((category) => {
                                const dayIndex = parseInt(category.split('/')[0]) - 1;
                                const dayData = nhanvienData.find(
                                    (item) => item.ngaydat === dayIndex + 1
                                );
                                return dayData ? dayData.so_don_hang : 0;
                            }),
                        };
                    });
                }

                const updatedState = {
                    options: {
                        chart: {
                            id: 'basic-bar',
                        },
                        xaxis: {
                            categories: categories,
                        },
                    },
                    series: seriesData,
                };

                setStateDonHangChua(updatedState);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });



        const getDataDatLich = async () => {
            const userreq = await fetch(`/thongke/${localStorage.getItem("chinhanh")}/dichvu/nhanvien/chua`)
            const userres = await userreq.json()
            setStateDonHangChuaExport(userres)
        }
        getDataDatLich()

    }, [id]);

    const LogoutSubmit = () => {
        localStorage.setItem("id_user", 0)
        localStorage.setItem("vaitro", 0)
        localStorage.setItem("login", "no")
        navigate("/")
    }
    return (
        <div id="wrapper">
            <Layout>
                <Sider className="sidebar" style={{ color: "#fff" }}>
                    <Menu mode="inline" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "15px", fontSize: "1rem", position: "relative" }}>
                        {/* <Menu mode="inline" theme="dark"> */}
                        <div className="logo">
                            <div className="logo-icon" style={{ margin: "15px 20px" }}>
                                <a href="/employee/index"><img src={imglogo} alt="" /></a>
                            </div>
                        </div>
                        <Menu.SubMenu key="dichvu" title="Dịch vụ">
                            <Menu.Item key='dichvu-1'><a href="/employee/adddichvu">Thêm mới</a></Menu.Item>
                            <Menu.Item key='dichvu-2'><a href="/employee/dichvu">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="sanpham" title="Sản phẩm">
                            <Menu.Item key='sanpham-1'><a href="/employee/addsanpham">Thêm mới</a></Menu.Item>
                            <Menu.Item key='sanpham-2'><a href="/employee/sanpham">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="binhluan" title="Bình luận">
                            <Menu.Item key='binhluan-1'><a href="/employee/binhluan">Danh sách</a></Menu.Item>
                        </Menu.SubMenu>
                        {localStorage.getItem("vaitro") === 1 ?
                            <Menu.SubMenu key="nguoidung" title="Người dùng">
                                <Menu.Item key='nguoidung-1'><a href="/employee/addnguoidung">Thêm mới</a></Menu.Item>
                                <Menu.Item key='nguoidung-2'><a href="/employee/nguoidung">Danh sách</a></Menu.Item>
                            </Menu.SubMenu>
                            :
                            ""
                        }
                        <Menu.SubMenu key='donhang' title="Đơn hàng">
                            {localStorage.getItem("vaitro") === 1 ?
                                <Menu.Item key='donhang-2'><a href="/employee/donhang">Danh sách</a></Menu.Item>
                                : localStorage.getItem("vaitro") === 2 ?
                                    <Menu.Item key='donhang-2'><a href="/QuanLyChiNhanh/donhang">Danh sách</a></Menu.Item>
                                    : <Menu.Item key='donhang-2'><a href="/employee/donhang">Danh sách</a></Menu.Item>
                            }
                        </Menu.SubMenu>
                        <Menu.SubMenu key='datlich' title="Đặt lịch">
                            {localStorage.getItem("vaitro") === 1 ?
                                <Menu.Item key='datlich-2'><a href="/employee/datlich">Danh sách</a></Menu.Item>
                                : localStorage.getItem("vaitro") === 2 ?
                                    <Menu.Item key='datlich-2'><a href="/QuanLyChiNhanh/datlich">Danh sách</a></Menu.Item>
                                    : <Menu.Item key='datlich-2'><a href="/employee/datlich">Danh sách</a></Menu.Item>
                            }
                        </Menu.SubMenu>
                        {localStorage.getItem("vaitro") === 1 ?
                            <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}><a href="/employee/thongke">Thống kê</a></Menu.Item>
                            : localStorage.getItem("vaitro") === 2 ?
                                <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}><a href="/QuanLyChiNhanh/thongke">Thống kê</a></Menu.Item>
                                : <Menu.Item key="Thống kê" icon={<AreaChartOutlined />}><a href="/employee/thongke">Thống kê</a></Menu.Item>
                        }
                    </Menu>
                </Sider>
            </Layout>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul class="navbar-nav ml-auto">
                            <div class="topbar-divider d-none d-sm-block"></div>
                            {/* <li class="nav-item dropdown no-arrow"> */}
                            <span
                                class="nav-link"
                                onClick={() => setOpenProfile((prev) => !prev)}
                            >
                                {dataUser.map((item, i) => (
                                    <>
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                                            {item.hoTen}
                                        </span>
                                        <img
                                            class="img-profile rounded-circle"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTK5QTN7bjRgXhzUHiR8o7fNjypmI5P3Ui5Zgpz1hcQ&s"
                                            alt=""
                                            width="30px"
                                            style={{ marginLeft: "0px" }}
                                        />
                                    </>
                                ))}
                            </span>
                            {openProfile && <div className="flex flex-col" style={{ position: "absolute", top: "70px", right: "50px", width: "150px", padding: "15px", backgroundColor: "white", border: "1px solid #333", zIndex: "100", borderRadius: "8px" }}>
                                <ul className="flex flex-col gap-4">
                                    <li><span>Thông tin cá nhân</span></li>
                                    <li><span onClick={() => navigate("/employee/index")}>Trang chủ Admin</span></li>
                                    <li><span onClick={() => navigate("/")}>Trang chủ User</span></li>
                                    <li><span onClick={() => LogoutSubmit()}>Đăng xuất</span></li>
                                </ul>
                            </div>}
                        </ul>
                    </nav>
                    <div class="container-fluid row">
                        <div class="col-xl-6">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Thống kê phân chia đơn hàng 10 ngày tới của từng nhân viên chi nhánh {localStorage.getItem("chinhanh") - 1}</h6>
                                </div>
                                <div class="card-body">
                                    <CSVLink data={stateDonHangChuaExport} filename="thongke-donhang-10ngaytoi-nhanvien" className="btn btn-success">Xuất bảng excel</CSVLink>
                                    <Chart
                                        options={stateDonHangChua.options}
                                        series={stateDonHangChua.series}
                                        type="bar"
                                        width="500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Thống kê đơn hàng đã hoàn thành tháng 12 của từng nhân viên chi nhánh {localStorage.getItem("chinhanh") - 1}</h6>
                                </div>
                                <div class="card-body">
                                    <Chart
                                        options={stateDonHang.options}
                                        series={stateDonHang.series}
                                        type="bar"
                                        width="500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Quản lý đặt lịch</h1>
                        </div>
                        <div class="card shadow mb-4">
                            <div class="card-body">
                                <div class="d-flex justify-content-around mb-4">
                                    {/* <h1 class="h3 mb-0 text-gray-800">Danh sách đơn hàng</h1> */}
                                    <div class="col-5 d-flex justify-content-around">
                                        <button class="btn btn-primary" onClick={() => { chonlocdatlich("chuaphancong") }}>Chưa phân công</button>
                                        <button class="btn btn-primary" onClick={() => { chonlocdatlich("dangthuchien") }}>Đang thực hiện</button>
                                        <button class="btn btn-primary" onClick={() => { chonlocdatlich("dahoanthanh") }}>Đã hoàn thành</button>
                                    </div>
                                    <div style={{ border: "1px solid #333" }}></div>
                                    <div class="col-7 d-flex justify-content-around">

                                        {localStorage.getItem("chinhanh") === 2 ?
                                            <>
                                                <button class="btn" style={{ color: "white", backgroundColor: "rgb(0, 143, 251)" }} onClick={() => { chonlocdonhang(10) }}>Đậu Quang Thái</button>
                                                <button class="btn" style={{ color: "white", backgroundColor: "rgb(0, 227, 150)" }} onClick={() => { chonlocdonhang(11) }}>Tinh Hữu Từ</button>
                                                <button class="btn" style={{ color: "white", backgroundColor: "rgb(254, 176, 25)" }} onClick={() => { chonlocdonhang(12) }}>Ngô Tấn Biên</button>
                                            </>
                                            :
                                            <>
                                                <button class="btn" style={{ color: "white", backgroundColor: "rgb(0, 143, 251)" }} onClick={() => { chonlocdonhang(13) }}>Hồ Nhất Huy</button>
                                                <button class="btn" style={{ color: "white", backgroundColor: "rgb(0, 227, 150)" }} onClick={() => { chonlocdonhang(14) }}>Trần Anh Vũ</button>
                                            </>
                                        }
                                    </div>
                                </div>
                                <table
                                    class="table table-bordered"
                                    id="dataTable"
                                    width="100%"
                                    cellspacing="0"
                                    style={{ fontSize: "13px" }}
                                >
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Người đặt</th>
                                            <th>Cơ sở</th>
                                            <th>Thời gian</th>
                                            <th>Dịch vụ</th>
                                            <th style={{ minWidth: "180px" }}>Nhân viên</th>
                                            <th>tổng tiền</th>
                                            <th>Trạng thái</th>
                                            <th style={{ maxWidth: "150px" }}>Hành dộng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataDatLich.map((item, i) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.hoten}</td>
                                                <td>{item.id_chinhanh === 2
                                                    ? "Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM."
                                                    : item.id_chinhanh === 3
                                                        ? "778/B1 Nguyễn Kiệm, phường 04, quận Phú Nhuận, TP HCM"
                                                        : ""}
                                                </td>
                                                <td>Ngày {moment(item.ngay).format('DD/MM/YYYY')} lúc {moment(item.thoigian, 'HH:mm:ss').format('HH:mm')}</td>
                                                <td>{item.id_dichvu === 1
                                                    ? "Dịch vụ tắm thú cưng"
                                                    : item.id_dichvu === 2
                                                        ? "Cắt tỉa lông"
                                                        : item.id_dichvu === 3
                                                            ? "khám chữa bệnh tại cơ sở"
                                                            : "giữ, chăm sóc hộ chủ"}
                                                </td>
                                                <td>
                                                    <select
                                                        class="form-select"
                                                        aria-label="Default select example"
                                                        name="dichvu" onChange={(event) =>
                                                            setSelectNhanVien(event.target.value)
                                                        }
                                                        style={{ fontSize: "13px" }}
                                                    >
                                                        <option value="0" selected>
                                                            {item.nhanvien === 10
                                                                ? "Đậu Quang Thái"
                                                                : item.nhanvien === 11
                                                                    ? "Tinh Hữu Từ"
                                                                    : item.nhanvien === 12
                                                                        ? "Ngô Tấn Biên"
                                                                        : item.nhanvien === 13
                                                                            ? "Hồ Nhất Huy"
                                                                            : item.nhanvien === 14
                                                                                ? "Trần Anh Vũ"
                                                                                : "Chưa chọn"}
                                                        </option>
                                                        {item.id_chinhanh === 3 ?
                                                            <>

                                                                <option value="13">Hồ Nhất Huy</option>
                                                                <option value="14">Trần Anh Vũ</option>
                                                            </>
                                                            : item.id_chinhanh === 2 ?
                                                                <>
                                                                    <option value="10">Đậu Quang Thái</option>
                                                                    <option value="11">Tinh Hữu Từ</option>
                                                                    <option value="12">Ngô Tấn Biên</option>
                                                                </>
                                                                :
                                                                <>
                                                                </>
                                                        }
                                                    </select>
                                                    <br />
                                                    <button
                                                        type="button"
                                                        class="btn btn-success" style={{ width: "100%" }}
                                                        // onClick={NextStatus}
                                                        onClick={() => SelectNV(selectNhanVien, item.id)}
                                                    >Chọn nhân viên</button>
                                                </td>
                                                <td>{item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{item.trangthai === 0
                                                    ? "Chờ xác nhận"
                                                    : item.trangthai === 1
                                                        ? "Đã xác nhận"
                                                        : item.trangthai === 2
                                                            ? "Đang thực hiện"
                                                            : "Đã hoàn thành"}
                                                </td>
                                                <td style={{ maxWidth: "160px" }}>
                                                    <button class="btn btn-info" data-toggle="modal"
                                                        data-target="#exampleModal" id={item.id} onClick={handleShow}
                                                        style={{ fontSize: "13px", minWidth: "140px" }}
                                                    >
                                                        Xem đơn
                                                    </button>
                                                    {item.trangthai < 3 ?
                                                        <button
                                                            type="button"
                                                            class="btn btn-success"
                                                            // onClick={NextStatus}
                                                            onClick={() => NextStatus(item.trangthai, item.id)}
                                                            style={{ fontSize: "13px", minWidth: "140px" }}
                                                        >
                                                            {item.trangthai === 0
                                                                ? "Đã xác nhận"
                                                                : item.trangthai === 1
                                                                    ? "Đang thực hiện"
                                                                    : item.trangthai === 2
                                                                        ? "hoàn thành đơn"
                                                                        : "hoàn thành đơn"}
                                                        </button>
                                                        :
                                                        ""
                                                    }
                                                    <button
                                                        class="btn btn-danger"
                                                        data-toggle="modal"
                                                        data-target="#logoutModal"
                                                        onClick={() => BackStatus(item.trangthai, item.id)}
                                                        style={{ fontSize: "13px", minWidth: "140px" }}
                                                    >
                                                        Hoàn tác
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-xl"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Chi tiết đơn hàng {localStorage.getItem("idCartDetail")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th style={{ width: "5%" }}>Id</th>
                                <th style={{ width: "15%" }}>Dịch vụ</th>
                                <th style={{ width: "" }}>Khách hàng</th>
                                <th style={{ width: "15%" }}>Ngày thực hiện</th>
                                <th style={{ width: "20%" }}>Địa chỉ thực hiện</th>
                                <th style={{ width: "13%" }}>Tên thú cưng</th>
                                <th style={{ width: "5%" }}>Loài</th>
                                <th style={{ width: "11%" }}>Giống loài</th>
                                <th style={{ width: "5%" }}>Trọng lượng</th>
                                <th style={{ width: "15%" }}>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataCartDetail.map((item, i) => (
                                <tr>
                                    <td style={{ width: "5%" }}>{item.id}</td>
                                    <td style={{ width: "15%" }}>
                                        {item.id_dichvu === 1
                                            ? "Dịch vụ tắm thú cưng"
                                            : item.id_dichvu === 2
                                                ? "Cắt tỉa lông"
                                                : item.id_dichvu === 3
                                                    ? "khám chữa bệnh tại cơ sở"
                                                    : "giữ, chăm sóc hộ chủ"}
                                    </td>
                                    <td>{item.hoten}</td>
                                    <td style={{ width: "15%" }}>Ngày {moment(item.ngay).format('DD/MM/YYYY')} <br />lúc {moment(item.thoigian, 'HH:mm:ss').format('HH:mm')}</td>
                                    <td style={{ width: "20%" }}>
                                        {item.id_chinhanh === 2
                                            ? "Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP HCM."
                                            : item.id_chinhanh === 3
                                                ? "778/B1 Nguyễn Kiệm, phường 04, quận Phú Nhuận, TP HCM"
                                                : ""}
                                    </td>
                                    <td style={{ width: "13%" }}>{item.tenthucung}</td>
                                    <td style={{ width: "5%" }}>{item.loai}</td>
                                    <td style={{ width: "11%" }}>{item.thuocgiong}</td>
                                    <td style={{ width: "5%" }}>{item.trongluong} kg</td>
                                    <td style={{ width: "15%" }}>{item.tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default QuanLyChiNhanhDatLich;
