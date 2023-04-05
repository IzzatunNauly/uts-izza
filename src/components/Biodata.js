import React from 'react';
import { FaStar } from 'react-icons/fa';

const Biodata = () => (
  <div>
    <h1>Biodata</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="images/foto.png" alt="foto" sstyle={{ width: '20px', height: '50px' }} />
    <table>
      <tbody>
        <tr>
          <td>Nama</td>
          <td>:</td>
          <td>Izzatun Nauly</td>
        </tr>
        <tr>
          <td>Tanggal Lahir</td>
          <td>:</td>
          <td>14 Juni 2001</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>Kerpangan, Leces, Probolinggo</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td>naulizzatun159@gmail.com</td>
        </tr>
        <tr>
          <td>No. Telepon</td>
          <td>:</td>
          <td>089602016687</td>
        </tr>
      </tbody>
    </table>
  </div>
  <FaStar size={20} color="#grey" />
  </div>
);

export default Biodata;

