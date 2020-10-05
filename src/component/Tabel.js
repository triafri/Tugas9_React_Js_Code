import React from 'react';
import {Table, ProgressBar} from 'react-bootstrap';

function Tabel(){
    return(
        <div>
              <Table>
                                        <thead>
                                            <th>#</th>
                                            <th>Nama Pemain</th>
                                            <th>Tim</th>
                                            <th>Transfer</th>
                                            <th>Proses Transfer</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>MAROUANE FELLAINI</td>
                                                <td>MANCHESTER UNITED</td>
                                                <td>SHANDONG LUNENG</td>
                                                <td><ProgressBar animated now={85} label='85%'/></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>LUIS NANI</td>
                                                <td>SPORTING CP</td>
                                                <td>ORLANDO CITY</td>
                                                <td><ProgressBar animated now={55} label='55%'/></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>MAREK HAMSIK</td>
                                                <td>NAPOLI</td>
                                                <td>DALIAN YIFANG</td>
                                                <td><ProgressBar animated now={95} label='95%'/></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>SARDAR AZMOUN</td>
                                                <td>RUBIN KAZAN</td>
                                                <td>ZENIT ST PETERSBURG</td>
                                                <td><ProgressBar animated now={100} label='100%'/></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>MICHY BATHHUAYI</td>
                                                <td>CHELSEA</td>
                                                <td>CRYSTAL PALACE</td>
                                                <td><ProgressBar animated now={50} label='50%'/></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>LUCAS PIAZON</td>
                                                <td>CHELSEA</td>
                                                <td>CHIEVO</td>
                                                <td><ProgressBar animated now={100} label='100%'/></td>
                                            </tr>
                                        </tbody>
            </Table>
        </div>
    )
}

export default Tabel