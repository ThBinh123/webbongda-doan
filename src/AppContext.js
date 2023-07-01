import { createContext, useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false); // ko co show
    const [count, setCount] = useState(1); // ko co count
    //++++++++++++++++++++++++++++++++++++++++++++++++++++
    const [product, setProduct] = useState(null);
    const [product2, setProduct2] = useState(null);
    const [cart, setCart] = useState([]);
    const [check, setCheck]=useState(0);
    const [check2, setCheck2]=useState(0);
    const [size, setSize]=useState(0);
    const [OderList, setOderList] = useState([]);
    const {id} = useParams();
    const getData = async () => {
        const data=`https://645cda6b250a246ae3103b6a.mockapi.io/List`
        axios
            .get(data)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(error => {
                if (error.response.status == "404") {

                }
            })
    }
    useEffect(() => {
        getData();
    }, []);
    ////Data product2
    const getData2 = async () => {
        const data=`https://645cda6b250a246ae3103b6a.mockapi.io/products`
        axios
            .get(data)
            .then(res => {
                setProduct2(res.data)
                console.log(res.data)
            })
            .catch(error => {
                if (error.response.status == "404") {

                }
            })
    }
    useEffect(() => {
        getData2();
    }, []);
    //++++++++++++++++++++++++++++++++++++++++++
    const addCart = async (id) => {
        const kq = product.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)

        if (index >= 0) {
            const newList = cart;
            newList[index]["qty"]++;
            setCart(newList);
            localStorage.setItem('cart_list', JSON.stringify(newList))
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }])
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: 1 }]));
        }
    }
    // const addOder = async (id) => {
    //     const kq = cart.find((Oder) => Oder.id == id)
    //     const index = OderList.findIndex((Oder) => Oder.id == id)

    //     if (index >= 0) {
    //         const newList =OderList;
    //         newList[index]["qty"]++;
    //         setOderList(newList);
        
    //     }
    //     else {
    //         setOderList([...OderList, { ...kq, qty: 1 }])
           
    //     }
    // }
    // const ChangeOder = (id, num) => {
    //     const kq = Oder.map((item) => (item.id == id && !(num == -1 && item.qty == 1)) ? { ...item, qty: item.qty + num } : item);
    //     setOder(kq);
    // }

    //////
    const addCart2 = async (id) => {
        const kq = product2.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)

        if (index >= 0) {
            const newList = cart;
            newList[index]["qty"]++;
            setCart(newList);
            localStorage.setItem('cart_list', JSON.stringify(newList))
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }])
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: 1 }]));
        }
    }


    console.log(cart);

    //++++++++++++++++++++++++++++++++++++++++++
    const changeMinus = (id) => {
        const kq = cart.map((item) =>
            id === item.id ? { ...item, qty: item.qty - (item.qty>1 ? 1 : 0) } : item
          
        );
      
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq))
    }
    const changeSum = (id) => {
        const kq = cart.map((item) =>
            id === item.id ? { ...item, qty: item.qty + (item.qty  ? 1 : 0) } : item

        );
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq))
    }
    //++++++++++++++++++++++++++++++++++++++++++
    const ChangeQty = (id, num) => {
        const kq = cart.map((item) => (item.id == id && !(num == -1 && item.qty == 1)) ? { ...item, qty: item.qty + num } : item);
        setCart(kq);
    }

    //++++++++++++++++++++++++++++++++++++++++++
    const DeleteMode = (id) => {
        const kq = cart.filter((str) => str.id !== id);
        setCart(kq);
    }
    const filterList = (List)=>{
        if(check ==1){
            return[List[0], List[9],List[10],List[11]];
        } else if(check==2){
            return[List[1], List[2],List[5],List[6],List[7],List[8]];
        } else if(check==3){
            return[List[3], List[4]];
        }else{
            return List;
        }
    }
    const filterList2 = (List)=>{
        if(check2 ==1){
            return[ List[3] ,List[4], List[5],List[6],List[7],List[8]];
        } else if(check2==2){
            return[List[0]];
        } else if(check2==3){
            return[List[1],List[2]];
        } else if(check2==4){
            return[List[9],List[10],List[11]];
        }else{
            return List;
        }
    }
    const filterSize = (size)=>{
        if(size ==39){
            return 39;
        }
        else if(size==40){
            return 40;
        }
    }

    //++++++++++++++++++++++++++++++++++++++++++
    const handle_sweel = () => {
        swal({
            title: "Complete!",
            text: "payment methods",
            icon: "success",
            button: "YES",
        });
    }
    const handle_sweel2 = () => {
        swal({
            title: "Thêm Vào Giỏ Hàng!",
            text: "Thành Công",
            icon: "success",
            button: "YES",
        });
    }
    const handle_sweel3 = () => {
        swal({
            title: "Thêm Vào Giỏ Hàng!",
            text: "Thành Công",
            icon: "success",
            button: "YES",
        });
    }
    


    return (
        <AppContext.Provider
            value={{
                show,
                count,
                setShow,
                product,
                cart,
                addCart,
                changeMinus,
                changeSum,
                DeleteMode,
                handle_sweel,
                ChangeQty,
                filterList,
                check,
                setCheck,
                product2,
                cart,
                addCart2,
                filterList2,
                setCheck2,
                handle_sweel2,
                handle_sweel3,
                id,
                filterSize,
                size,
                setSize,
                
            }}>
            {children}
        </AppContext.Provider>
    )
} 