import React,{Component} from"react";
import Header from "./Header";
import DaftarMinuman from "../Lib/DaftarMinuman"
class MenuMinuman extends Component{
  render(){
    return(
      <div>
        <Header/>
        <h3>Daftar Minuman Favourite</h3>
        <table style={{width:"100%"}}>
          <tbody>
            <tr>
              {DaftarMinuman.map((data,index)=>{
                return(
                  <td>
                    <center>
                      <img
                      src={data.img}
                      alt="Product Minuman"
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
export default MenuMinuman;
