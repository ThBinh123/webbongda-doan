import { useContext } from "react"
import { AppContext } from "../../AppContext"
import "./Cart.css";
import { HiOutlineTrash } from "react-icons/hi2";
import {BsCartXFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer from "../footer/Footer";

export default function Cart() {
    // const [total, setTotal]= useState(0)
    const [item, setcard2] = useState([]);
    const { ChangeQty, cart, changeMinus, changeSum, DeleteMode } = useContext(AppContext)
    function totalcart(cart) {
        var sumtotal = 0;
        for (var i = 0; i < cart.length; i++) {
            sumtotal += cart[i].Buy * cart[i].qty;
        }
        return sumtotal;

    }
    function numberFormat(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        return x1 + x2;
    }
    if(cart.length==0){
        return(
            <div className="cartplus" style={{
                marginTop:"180px", 
                textAlign:"center",
                height:"50%",
                paddingTop:"100px",
                color:"#fff"
                
                }}>
                <h3>CHƯA CÓ SẢN PHẨM NÀO</h3>
                <a href="/SanPham" style={{color:"#f39c12"}}>Tiếp Tục Mua Hàng</a>
                <div style={{marginTop:"20%"}}><Footer /></div>
            </div>
        )
    }
    else{

    return (
        <div className="cartplus">
            <h2>GIỎ HÀNG</h2>
            <div className="carts">
                <p></p>

                {
                    cart && cart.map((item, index) =>
                    (
                        <div className="Carts_Box" key={index} >
                            <img src={item.imageUrl} alt="" className="image-carts" />
                            <div className="font_name">{item.Name}</div>
                            <p className="prices">Giá:<div className="prices2">{item.Buy}</div></p>
                            <div className="btn">
                                <div className="btn-box">
                                    <a className="btn1" onClick={() => changeSum(item.id)}></a>
                                    <div className="qty">{item.qty}</div>
                                    <a className="btn2" onClick={() => changeMinus(item.id)}></a>
                                </div>
                            </div>

                            <div className="prices_sum">
                                <p>Thành Tiền: </p>
                                <p className="font_name">{numberFormat((item.Buy * item.qty).toFixed(3).replace('.', ','))}</p>
                            </div>

                            <div className="Delete" onClick={() => {
                                DeleteMode(item.id)
                            }}><BsCartXFill /></div>
                        </div>
                    )
                    )
                }
                
            </div>
            <div className="total">
                <p>TỔNG CỘNG: <h3>{numberFormat(totalcart(cart).toFixed(3).replace('.', ','))}</h3></p>
                <Link class="buy" to={`/DatHang/ThanhToan`} style={{ marginRight: "10px" }}>Thanh Toán</Link>
            </div>
            <div><Footer /></div>
        </div>
    )
            }      
}
