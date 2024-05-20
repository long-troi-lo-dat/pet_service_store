/*! For license information please see server.bundle.js.LICENSE.txt */
(()=>{var n={578:(n,t,e)=>{var o=e(492);n.exports={getSanpham:function(n,t){o.getAll().then((function(n){return t.json(n)})).catch((function(n){return t.status(500).send(n)}))}}},546:(n,t,e)=>{var o=e(12).createConnection({host:"localhost",user:"root",password:"",database:"datn-petservice"});o.connect(),n.exports=o},492:(n,t,e)=>{var o=e(546);n.exports={getAll:function(){return new Promise((function(n,t){o.query("SELECT * FROM sanpham",(function(e,o){if(e)return t(e);n(o)}))}))}}},968:(n,t,e)=>{var o=e(252).Router(),r=e(607);o.use("/product",r),n.exports=o},607:(n,t,e)=>{var o=e(252).Router(),r=e(578);o.get("/",r.getSanpham),n.exports=o},729:n=>{"use strict";n.exports=require("bcryptjs")},268:n=>{"use strict";n.exports=require("body-parser")},726:n=>{"use strict";n.exports=require("config")},577:n=>{"use strict";n.exports=require("cors")},818:n=>{"use strict";n.exports=require("dotenv")},252:n=>{"use strict";n.exports=require("express")},12:n=>{"use strict";n.exports=require("mysql2")},572:n=>{"use strict";n.exports=require("nodemailer")},778:n=>{"use strict";n.exports=require("readline")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return n[o](a,a.exports,e),a.exports}(()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(){"use strict";t=function(){return o};var e,o={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(n,t,e){n[t]=e.value},u="function"==typeof Symbol?Symbol:{},h=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function d(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{d({},"")}catch(e){d=function(n,t,e){return n[t]=e}}function g(n,t,e,o){var r=t&&t.prototype instanceof m?t:m,a=Object.create(r.prototype),u=new C(o||[]);return i(a,"_invoke",{value:L(n,e,u)}),a}function y(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}o.wrap=g;var f="suspendedStart",l="suspendedYield",p="executing",E="completed",v={};function m(){}function j(){}function b(){}var T={};d(T,h,(function(){return this}));var O=Object.getPrototypeOf,R=O&&O(O(H([])));R&&R!==r&&a.call(R,h)&&(T=R);var S=b.prototype=m.prototype=Object.create(T);function q(n){["next","throw","return"].forEach((function(t){d(n,t,(function(n){return this._invoke(t,n)}))}))}function _(t,e){function o(r,i,u,h){var c=y(t[r],t,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==n(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(n){o("next",n,u,h)}),(function(n){o("throw",n,u,h)})):e.resolve(d).then((function(n){s.value=n,u(s)}),(function(n){return o("throw",n,u,h)}))}h(c.arg)}var r;i(this,"_invoke",{value:function(n,t){function a(){return new e((function(e,r){o(n,t,e,r)}))}return r=r?r.then(a,a):a()}})}function L(n,t,o){var r=f;return function(a,i){if(r===p)throw Error("Generator is already running");if(r===E){if("throw"===a)throw i;return{value:e,done:!0}}for(o.method=a,o.arg=i;;){var u=o.delegate;if(u){var h=w(u,o);if(h){if(h===v)continue;return h}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===f)throw r=E,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=p;var c=y(n,t,o);if("normal"===c.type){if(r=o.done?E:l,c.arg===v)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(r=E,o.method="throw",o.arg=c.arg)}}}function w(n,t){var o=t.method,r=n.iterator[o];if(r===e)return t.delegate=null,"throw"===o&&n.iterator.return&&(t.method="return",t.arg=e,w(n,t),"throw"===t.method)||"return"!==o&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+o+"' method")),v;var a=y(r,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,v;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function M(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function x(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function C(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(M,this),this.reset(!0)}function H(t){if(t||""===t){var o=t[h];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return j.prototype=b,i(S,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,s,"GeneratorFunction"),o.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,b):(n.__proto__=b,d(n,s,"GeneratorFunction")),n.prototype=Object.create(S),n},o.awrap=function(n){return{__await:n}},q(_.prototype),d(_.prototype,c,(function(){return this})),o.AsyncIterator=_,o.async=function(n,t,e,r,a){void 0===a&&(a=Promise);var i=new _(g(n,t,e,r),a);return o.isGeneratorFunction(t)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},q(S),d(S,s,"Generator"),d(S,h,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),o.keys=function(n){var t=Object(n),e=[];for(var o in t)e.push(o);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},o.values=H,C.prototype={constructor:C,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!n)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function o(o,r){return u.type="throw",u.arg=n,t.next=o,r&&(t.method="next",t.arg=e),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var h=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(h&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(h){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===n||"continue"===n)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=n,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),v},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),x(e),v}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var o=e.completion;if("throw"===o.type){var r=o.arg;x(e)}return r}}throw Error("illegal catch attempt")},delegateYield:function(n,t,o){return this.delegate={iterator:H(n),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=e),v}},o}function o(n,t,e,o,r,a,i){try{var u=n[a](i),h=u.value}catch(n){return void e(n)}u.done?t(h):Promise.resolve(h).then(o,r)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function u(n){o(i,r,a,u,h,"next",n)}function h(n){o(i,r,a,u,h,"throw",n)}u(void 0)}))}}var a=e(252),i=e(577),u=e(818),h=e(968),c=e(546);e(268),e(729),e(572),e(778),e(726),a.Router(),u.config();var s=process.env.PORT||8e3,d=a(),g=process.env.REACT_APP_URL;d.use(i({origin:g,credentials:!0})),d.use(a.json()),d.use(a.static("./images")),d.use(a.urlencoded({extended:!1})),d.use("/api",h),d.get("/",(function(n,t){t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),t.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type"),t.setHeader("Access-Control-Allow-Credentials",!0),t.send("Welcome you, admin")})),d.get("/shop",(function(n,t){c.query("SELECT * FROM sanpham ORDER BY id_dm DESC, ngaythem DESC ",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/shop/:category/:detail/:price",(function(n,t){var e=n.params.category,o=n.params.detail,r=n.params.price,a="0"!==o?"id_gl = ?":null,i="0"!==r?parseInt(r)>2e5?"gia > ?":"gia < ?":null,u=[e];a&&u.push(o),i&&u.push(parseInt(r));var h=["id_dm = ?",a,i].filter((function(n){return null!==n})).join(" AND "),s="SELECT * FROM sanpham WHERE ".concat(h," ORDER BY id_dm ASC, ngaythem DESC");c.query(s,u,(function(n,e){return n?(console.error(n),t.status(500).json({error:"Internal server error"})):(console.log(s,u,"query result"),t.json(e))}))})),d.get("/detail/:id",(function(n,t){var e=n.params.id;c.query("SELECT * FROM sanpham WHERE id_sp = ?",[e],(function(n,e){return n?t.json("Error"):t.json(e)}))})),d.get("/binhluan/:id",(function(n,t){var e=n.params.id;c.query("SELECT * FROM binhluan where anHien=0 and id_sp= ?",[e],(function(n,e){return n?t.json("Error"):t.json(e)}))})),d.get("/AdminBinhLuan",(function(n,t){c.query("SELECT * FROM binhluan",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminSanPham",(function(n,t){c.query("SELECT * FROM sanpham order by ngaythem desc",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/shop/:category",(function(n,t){var e=n.params.category,o="SELECT * FROM sanpham ORDER BY ngaythem DESC";"0"!==e&&(o="SELECT * FROM sanpham WHERE id_dm=? ORDER BY ngaythem DESC"),c.query(o,e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminDichVu",(function(n,t){c.query("SELECT * FROM dichvu",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminThuCung",(function(n,t){c.query("select thucung.*, giongloai.ten as tengiongloai from thucung INNER JOIN giongloai on thucung.id_gl = giongloai.id_gl order by thucung.id",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminNguoiDung",(function(n,t){c.query("SELECT * FROM nguoidung",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/quanlynguoidung/:cate",(function(n,t){var e="not vaitro=0";0==n.params.cate&&(e="vaitro=0");var o="SELECT * FROM nguoidung where ".concat(e);c.query(o,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/vohieuhoa/:iduser",(function(n,t){var e="UPDATE nguoidung SET vohieuhoa=1 WHERE id_user= ".concat(n.params.iduser);c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/kichhoat/:iduser",(function(n,t){var e="UPDATE nguoidung SET vohieuhoa=0 WHERE id_user= ".concat(n.params.iduser);c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminDonHang",(function(n,t){c.query("SELECT * FROM donhang where trangthai<4 order by ngaydat desc",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminDonHangThanhCong",(function(n,t){c.query("SELECT * FROM donhang where trangthai=4",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminDatLich",(function(n,t){c.query("SELECT * FROM donhangdichvu where trangthai<3 order by ngay desc , thoigian desc",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/AdminDatLich/:chinhanh",(function(n,t){var e="SELECT * FROM donhangdichvu where trangthai<3 and id_chinhanh=".concat(n.params.chinhanh," order by ngay desc , thoigian desc");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/nhanvien/:chinhanh/:idnhanvien",(function(n,t){var e="SELECT * FROM donhangdichvu where nhanvien=".concat(n.params.idnhanvien," and id_chinhanh=").concat(n.params.chinhanh," order by ngay desc , thoigian desc");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/datlich/chuaphancong",(function(n,t){n.params.donhang,c.query("SELECT * FROM donhangdichvu where nhanvien=1 order by ngay desc , thoigian desc",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/datlich/dangthuchien",(function(n,t){n.params.donhang,c.query("SELECT * FROM donhangdichvu where trangthai<3 order by ngay desc , thoigian desc",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/datlich/dahoanthanh",(function(n,t){n.params.donhang,c.query("SELECT * FROM donhangdichvu where trangthai=3 order by ngay desc , thoigian desc",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/nhanvien/:chinhanh/datlich/chuaphancong",(function(n,t){n.params.chinhanh;var e="SELECT * FROM donhangdichvu where nhanvien=1 and id_chinhanh=".concat(n.params.chinhanh," order by ngay desc , thoigian desc");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/nhanvien/:chinhanh/datlich/dangthuchien",(function(n,t){n.params.chinhanh;var e="SELECT * FROM donhangdichvu where trangthai<3 and id_chinhanh=".concat(n.params.chinhanh," order by ngay desc , thoigian desc");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/employee/nhanvien/:chinhanh/datlich/dahoanthanh",(function(n,t){n.params.chinhanh;var e="SELECT * FROM donhangdichvu where trangthai=3 and id_chinhanh=".concat(n.params.chinhanh," order by ngay desc , thoigian desc");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/ChiNhanh/DatLich",(function(n,t){var e=n.query.chinhanh;c.query("SELECT * FROM donhangdichvu where id_chinhanh=? and not trangthai=3",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/dondahoanthanhchinhanh",(function(n,t){var e=n.query.chinhanh;c.query("SELECT * FROM donhangdichvu where id_chinhanh=? and trangthai=3",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/NhanVien/DichVu",(function(n,t){n.query.chinhanh,c.query("SELECT * FROM nguoidung where chinhanh=?",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/NhanVien/DatLich",(function(n,t){var e=n.query.chinhanh,o=n.query.nhanvien;c.query("SELECT * FROM donhangdichvu where id_chinhanh=? and nhanvien=? order by ngay desc , thoigian desc",[e,o],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/DichVu2/DonHang/:id",(function(n,t){c.query("SELECT * FROM donhangdichvu where chinhanh=2 and nhanvien=?",(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/selectnhanvien",(function(n,t){var e="UPDATE donhangdichvu SET nhanvien='".concat(n.body.nhanvien,"' WHERE id='").concat(n.body.id,"'");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/donhang/theongay",(function(n,t){c.query("SELECT DATE(ngaydat) AS datengaydat, SUM(tongtien) AS tongtien\n  FROM donhang\n  GROUP BY datengaydat\n  ORDER BY datengaydat",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/donhang/theothang",(function(n,t){c.query("SELECT MONTH(ngaydat) AS monthngaydat, SUM(tongtien) AS sumtongtien\n  FROM donhang where MONTH(ngaydat) = MONTH(CURDATE())\n  GROUP BY monthngaydat\n  ORDER BY monthngaydat",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/donhang/chuaxacnhan",(function(n,t){c.query("SELECT count(id) as donhangchuaxacnhan FROM donhang WHERE trangthai=0",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/donhang/dahoanthanh",(function(n,t){c.query("SELECT count(id) as donhangdahoanthanh FROM donhang WHERE trangthai=4",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/donhang/nhanvien/:nhanvien/dahoanthanh",(function(n,t){var e="SELECT count(id) as donhangdahoanthanh FROM donhangdichvu WHERE trangthai=3 and nhanvien=".concat(n.params.nhanvien);c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/donhang/nhanvien/:nhanvien/tongdanhthu",(function(n,t){var e="SELECT SUM(tongtien) AS tong_tien_thang FROM donhangdichvu WHERE trangthai=3 and nhanvien=".concat(n.params.nhanvien);c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/dichvu/nhanvien/roi",(function(n,t){c.query("SELECT nhanvien, MONTH(ngay) as thang, COUNT(*) AS so_don_hang \n  FROM donhangdichvu where trangthai=3\n  GROUP BY nhanvien, MONTH(ngay)",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/:chinhanh/dichvu/nhanvien/roi",(function(n,t){var e="SELECT nhanvien, MONTH(ngay) as thang, COUNT(*) AS so_don_hang \n  FROM donhangdichvu where trangthai=3 and id_chinhanh=".concat(n.params.chinhanh,"\n  GROUP BY nhanvien, MONTH(ngay)");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/chinhanh/:chinhanh/dichvu/nhanvien/roi",(function(n,t){var e="SELECT nhanvien, MONTH(ngay) as thang, COUNT(*) AS so_don_hang \n  FROM donhangdichvu where trangthai=3 and id_chinhanh=".concat(n.params.chinhanh,"\n  GROUP BY nhanvien, MONTH(ngay)");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/dichvu/nhanvien/chua",(function(n,t){c.query("SELECT MONTH(ngay) as thangdat, Day(ngay) as ngaydat,nhanvien, COUNT(*) AS so_don_hang \n  FROM donhangdichvu where trangthai<3\n  GROUP BY nhanvien, Day(ngay) order by ngaydat",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/chinhanh/:chinhanh/dichvu/nhanvien/chua",(function(n,t){var e="SELECT MONTH(ngay) as thangdat, Day(ngay) as ngaydat,nhanvien, COUNT(*) AS so_don_hang \n  FROM donhangdichvu where trangthai<3 and id_chinhanh=".concat(n.params.chinhanh,"\n  GROUP BY nhanvien, Day(ngay) order by ngaydat");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/chinhanh/dichvu/nhanvien/:nhanvien/chua",(function(n,t){var e="SELECT MONTH(ngay) as thangdat, Day(ngay) as ngaydat,nhanvien, COUNT(*) AS so_don_hang \n  FROM donhangdichvu where trangthai<3 and nhanvien=".concat(n.params.nhanvien,"\n  GROUP BY nhanvien, Day(ngay) order by ngaydat");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/dichvu/tongtien",(function(n,t){c.query("SELECT MONTH(ngay) as thang, SUM(tongtien) AS tong_tien_thang\n  FROM donhangdichvu\n  GROUP BY MONTH(ngay)",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/dichvu/:chinhanh/tongtien",(function(n,t){var e="SELECT MONTH(ngay) as thang, SUM(tongtien) AS tong_tien_thang\n  FROM donhangdichvu where id_chinhanh=".concat(n.params.chinhanh,"\n  GROUP BY MONTH(ngay)");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/newregister",(function(n,t){c.query("SELECT COUNT(id_user) AS so_nguoi_dang_ky_moi FROM nguoidung WHERE MONTH(ngaytao) = MONTH(CURDATE())",(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/thongke/datlich/chuahoanthanh",(function(n,t){c.query("SELECT count(id) as datlichchuahoanthanh FROM donhangdichvu WHERE trangthai<3",(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/nextstatus",(function(n,t){var e="UPDATE donhangdichvu SET trangthai='".concat(n.body.trangthai+1,"' WHERE id='").concat(n.body.id,"'");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/backstatus",(function(n,t){var e="UPDATE donhangdichvu SET trangthai='".concat(n.body.trangthai-1,"' WHERE id='").concat(n.body.id,"'");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/nextstatusdh",(function(n,t){var e="UPDATE donhang SET trangthai='".concat(n.body.trangthai+1,"' WHERE id='").concat(n.body.id,"'");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/backstatusdh",(function(n,t){var e="UPDATE donhang SET trangthai='".concat(n.body.trangthai-1,"' WHERE id='").concat(n.body.id,"'");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/xoadonhang",(function(n,t){var e=n.query.id;c.query("DELETE FROM `donhang` WHERE id = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/detaildonhang",(function(n,t){var e=n.query.data;c.query("SELECT donhangchitiet.id_dhct,sanpham.hinhanh,donhangchitiet.id_sp,donhangchitiet.thanhtien,donhangchitiet.soluong,donhangchitiet.id_dh,sanpham.ten,sanpham.gia   FROM`donhangchitiet`   INNER JOIN `sanpham` ON donhangchitiet.id_sp = sanpham.id_sp   WHERE donhangchitiet.id_dh = ? ",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/adddichvu",(function(n,t){var e=[n.body.ten,n.body.gia,n.body.mota];c.query("INSERT into `dichvu` (`ten`,`gia`,`mota`) values (?,?,?)",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/addsanpham",(function(n,t){var e=[n.body.ten,n.body.gia,n.body.hinhanh,n.body.soluong,n.body.mota,n.body.iddm];c.query("INSERT into `sanpham` (`ten`,`gia`,`hinhanh`,`soluong`,`mota`,`id_dm`) values (?,?,?,?,?,?)",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/addnguoidung",(function(n,t){var e=[n.body.hoTen,n.body.anhdaidien,n.body.sdt,n.body.email,n.body.matkhau,n.body.diachi,n.body.mota,n.body.chinhanh,n.body.vaitro];c.query("INSERT into `nguoidung` (`hoTen`,`anhdaidien`,`sdt`,`email`,`matkhau`,`diachi`,`mota`,`chinhanh`,`vaitro`) values (?,?,?,?,?,?,?,?,?)",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/xoadichvu",(function(n,t){var e=n.query.id;c.query("DELETE FROM `dichvu` WHERE id = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/ansanpham/:id",(function(n,t){var e=n.params.id;c.query("UPDATE `sanpham` SET `anhien`='1' WHERE id_sp=?",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/hiensanpham/:id",(function(n,t){var e=n.params.id;c.query("UPDATE `sanpham` SET `anhien`='0' WHERE id_sp=?",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/anbinhluan/:id",(function(n,t){var e=n.params.id;c.query("UPDATE `binhluan` SET `anHien`='1' WHERE id=?",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/hienbinhluan/:id",(function(n,t){var e=n.params.id;c.query("UPDATE `binhluan` SET `anHien`='0' WHERE id=?",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/xoathucung",(function(n,t){var e=n.query.id;c.query("DELETE FROM `thucung` WHERE id = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/binhluan",(function(n,t){var e=[n.body.hoten,n.body.noidung,n.body.idsp];c.query("INSERT into `binhluan` (`hoten`,`noidung`,`id_sp`) values (?,?,?)",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/signup",function(){var n=r(t().mark((function n(e,o){var r;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=4,new Promise((function(n,t){c.query("SELECT * FROM `nguoidung` WHERE `email` = ?",[e.body.email],(function(e,o){e?t(e):n(o.length>0)}))}));case 4:if(!n.sent){n.next=7;break}return n.abrupt("return",o.json({error:"Email đã tồn tại trong hệ thống"}));case 7:r=[e.body.hoten,e.body.sdt,e.body.email,e.body.password],c.query("INSERT INTO `nguoidung` (`hoTen`, `sdt`, `email`, `matkhau`, `chinhanh`) VALUES (?, ?, ?, ?, 1)",r,(function(n,t){return n?o.json({error:"Đăng ký thất bại",details:n}):o.json({success:!0,message:"Đăng ký thành công"})})),n.next=15;break;case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",o.json({error:"Đăng ký thất bại",details:n.t0.message}));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t,e){return n.apply(this,arguments)}}()),d.post("/login",(function(n,e){var o=n.body.email,a=n.body.password;c.query("SELECT * FROM `nguoidung` WHERE `email` = ?",[o],function(){var n=r(t().mark((function n(o,r){var i;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o){n.next=2;break}return n.abrupt("return",e.json(o));case 2:if(!(r.length>0)){n.next=17;break}if(i=r[0],"true"!=(a===i.matkhau?"true":"false")){n.next=14;break}if(0!==i.vohieuhoa){n.next=11;break}return n.abrupt("return",e.json(i));case 11:return n.abrupt("return",e.json({error:"Tài khoản đã bị vô hiệu hóa! Vui lòng liên hệ 0901 660 002 để biết thêm thông tin chi tiết"}));case 12:n.next=15;break;case 14:return n.abrupt("return",e.json({error:"Sai mật khẩu"}));case 15:n.next=18;break;case 17:return n.abrupt("return",e.json({error:"Người dùng không tồn tại"}));case 18:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}())})),d.get("/userdetailedit/:id",(function(n,t){var e=n.params.id;c.query("SELECT hoTen,anhdaidien,sdt,diachi FROM `nguoidung` WHERE id_user = ?",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/userdetail/:id",(function(n,t){var e=n.params.id;c.query("SELECT * FROM `nguoidung` WHERE id_user = ?",e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/updatethongtin",(function(n,t){var e=[n.body.hoTen,n.body.anhdaidien,n.body.sdt,n.body.diachi],o="UPDATE nguoidung SET hoTen=?,anhdaidien=?,sdt=?,diachi=? WHERE id_user= ".concat(n.body.id_user);c.query(o,e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/changepassword",function(){var n=r(t().mark((function n(e,o){var a,i,u;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=e.body.oldpassword,i=e.body.newpassword,u=e.body.id_user,c.query("SELECT * FROM NGUOIDUNG WHERE id_user = ?",[u],function(){var n=r(t().mark((function n(e,r){return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=2;break}return n.abrupt("return",o.json(e));case 2:if(0!==r.length){n.next=4;break}return n.abrupt("return",o.json({error:"User not found"}));case 4:if("false"!=(r[0].matkhau===a?"true":"false")){n.next=9;break}return n.abrupt("return",o.json({error:"Mật khẩu hiện tại không đúng"}));case 9:c.query("UPDATE nguoidung SET matkhau = ? WHERE id_user = ?",[i,u],(function(n,t){return n?o.json(n):o.json(t)}));case 11:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}());case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),d.get("/donhanguser/:id",(function(n,t){var e=n.params.id;c.query("SELECT * FROM `donhangdichvu` WHERE id_user = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/detaildatlichuser",(function(n,t){var e=n.query.data,o=n.query.iduser;c.query("SELECT * FROM `donhangdichvu` WHERE id=? and id_user =?",[e,o],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/detaildatlich",(function(n,t){var e=n.query.data;c.query("SELECT * FROM `donhangdichvu` WHERE id=?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/detaildonhanguser",(function(n,t){var e=n.query.data;c.query("SELECT donhangchitiet.id_dhct,donhangchitiet.id_sp,donhangchitiet.thanhtien,donhangchitiet.soluong,donhangchitiet.id_dh,sanpham.ten,sanpham.gia   FROM`donhangchitiet`   INNER JOIN `sanpham` ON donhangchitiet.id_sp = sanpham.id_sp   WHERE donhangchitiet.id_dh = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/bookingservice",(function(n,t){var e;e=1==n.body.dichvu?5e5:2==n.body.dichvu?3e5:3==n.body.dichvu?12e4:5==n.body.dichvu?8e5:6==n.body.dichvu?962e3:1e5;var o=[n.body.hoten,n.body.sdt,n.body.email,n.body.ngay,n.body.thoigian,n.body.tenthucung,n.body.loai,n.body.thuocgiong,n.body.tuoi,n.body.trongluong,n.body.ghichu,e,n.body.dichvu,n.body.iduser,n.body.chinhanh];c.query("INSERT INTO `donhangdichvu` (`hoten`, `sodienthoai`, `email`, `ngay` ,`thoigian`, `tenthucung`, `loai`, `thuocgiong`, `sotuoi`, `trongluong`, `ghichu`,`tongtien`, `id_dichvu`, `id_user`,`id_chinhanh`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",o,(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/huydichvu",(function(n,t){var e=n.query.id;c.query("DELETE FROM `donhangdichvu` WHERE id = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/huydonhang",(function(n,t){var e=n.query.id;c.query("DELETE FROM `donhang` WHERE id = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/xemdathang",(function(n,t){var e=n.query.id;c.query("select * FROM `donhang` WHERE id_user = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.get("/xemdatlich",(function(n,t){var e=n.query.id;c.query("select * FROM `donhangdichvu` WHERE id_user = ?",[e],(function(n,e){return n?t.json(n):t.json(e)}))})),d.post("/dathang",(function(n,t){var e=n.body,o=e.hoten,r=e.sodienthoai,a=e.diachi,i=e.ghichu,u=e.id_user,h=e.cart,s=h.reduce((function(n,t){return n+t.gia*t.amount}),0);c.query("INSERT INTO donhang(ten_nguoi_nhan, sdt_nguoi_nhan, diachi, tongtien, id_user, ghichu) VALUES(?, ?, ?, ?, ?, ?)",[o,r,a,s,u,i],(function(n,e){if(n)return console.log("don hang"),t.json(n);var o=e.insertId,r=h.map((function(n){return[o,n.id_sp,n.amount,n.gia*n.amount]}));c.query("INSERT INTO donhangchitiet(id_dh, id_sp, soluong, thanhtien) VALUES ? ",[r],(function(n,e){if(n)return t.json(n);h.forEach((function(n){c.query("UPDATE sanpham SET soluong = soluong - ? WHERE id_sp = ? ",[n.amount,n.id_sp],(function(n,t){n&&console.error("Error updating product quantity:",n)}))})),t.status(200).json({message:"Order added successfully"})}))}))}));var y={};d.post("/forgot_password",(function(n,t){var e=n.body.email;if(!e)return t.status(400).json({error:"Email is required"});var o=Math.floor(1e5+9e5*Math.random()).toString();y[e]=o;var r={from:"Dghousepetshop115@gmail.com",to:e,subject:"DGHOUSE PET SHOP KHÔI PHỤC MẬT KHẨU",html:'< !DOCTYPE html >\n    <html lang="en" >\n      <head>\n        <meta charset="UTF-8">\n          <title>CodePen - OTP Email Template</title>\n\n\n      </head>\n      <body>\n        \x3c!-- partial:index.partial.html --\x3e\n        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">\n          <div style="margin:50px auto;width:70%;padding:20px 0">\n            <div style="border-bottom:1px solid #eee">\n              <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">DG House</a>\n            </div>\n            <p style="font-size:1.1em">Xin chào,</p>\n            <p>Cảm ơn bạn vì đã chọn DG House. Dùng mã OTP dưới đây để khôi phục lại mật khẩu của bạn. OTP sẽ tồn tại trong 5 phút</p>\n            <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">'.concat(o,'</h2>\n            <p style="font-size:0.9em;">Trân trọng,<br />DG House</p>\n            <hr style="border:none;border-top:1px solid #eee" />\n            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">\n              <p>DG House Inc</p>\n              <p>1600 Amphitheatre Parkway</p>\n              <p>California</p>\n            </div>\n          </div>\n        </div>\n        \x3c!-- partial --\x3e\n\n      </body>\n    </html>')};try{transporter.sendMail(r,(function(n,e){if(n)return console.error("Lỗi gửi OTP qua email:",n),t.status(500).json({error:"Lỗi gửi OTP qua email"});console.log("Email gửi thành công:",e),t.status(200).json({message:"OTP đã được gửi thành công"})}))}catch(n){console.error("Lỗi không mong muốn:",n),t.status(500).json({error:"Lỗi không mong muốn"})}})),d.post("/verify-otp",(function(n,t){var e=n.body,o=e.emailFromLocal,r=e.otp;if(console.log(o,r),!o||!r)return t.status(400).json({error:"Email and OTP are required"});y[o]===r?(delete y[o],t.status(200).json({message:"OTP verified successfully"})):t.status(401).json({error:"Invalid OTP"})})),d.post("/doimatkhau",(function(n,t){var e="UPDATE nguoidung SET matkhau = '".concat(n.body.password,"' WHERE email = '").concat(n.body.emailFromLocal,"'");c.query(e,(function(n,e){return n?t.json(n):t.json(e)}))})),d.listen(s,(function(){console.log("Server is running on http://localhost:".concat(s))}))})()})();