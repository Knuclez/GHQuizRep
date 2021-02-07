import React from 'react';
import '../assets/css/pelea.css'
import Pjpelea from './cosasdepelea/Pjpelea'
import Enemigo from './cosasdepelea/Enemigo'
import Actionbar from './cosasdepelea/Actionbar'
import Statusenemigo from './cosasdepelea/Statusenemigo'
import Statuspj from "./cosasdepelea/Statuspj"

function Pelea(){
    return(
        <div>
          <table className="marco">
            <tr>
              <td><Statuspj/></td> <td><Statusenemigo/></td>
            </tr>
            <tr>
              <td><Pjpelea/></td><td><Enemigo/></td>
            </tr>
            <tr><td><Actionbar/></td></tr>
          </table>
        </div>
    )
}
export default Pelea;