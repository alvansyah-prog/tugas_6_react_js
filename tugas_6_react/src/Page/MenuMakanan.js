import React,{Component} from"react";
import Header from "./Header";
import DaftarMakanan from "../Lib/DaftarMakanan"
class MenuMakanan extends Component{
  render(){
    return(
      <div>
        <Header/>
        <h3>Daftar Makanan Favourite</h3>
        <table style={{width:"100%"}}>
          <tbody>
            <tr>
              {DaftarMakanan.map((data,index)=>{
                return(
                  <td>
                    <center>
                      <img
                      src={data.img}
                      alt="Product Makanan"
                      width="150"
                      height="100"
                      />
                      <p>{data.nama}</p>
                      <p>Harga : Rp. {data.harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default MenuMakanan;
