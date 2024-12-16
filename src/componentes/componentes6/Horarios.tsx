import React from "react";

const HorariosAtencion: React.FC = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Nuestros horarios de atención</h2>
      <table className="table table-bordered text-center">
        <thead className="table-secondary">
          <tr>
            <th scope="col">🗹</th>
            <th scope="col">Lunes Martes Miércoles</th>
            <th scope="col">Jueves y Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>✔</td>
            <td>08:00AM A 12:00PM</td>
            <td>08:00AM A 12:00PM</td>
          </tr>
          <tr>
            <td>✔</td>
            <td>12:00PM A 02:00PM</td>
            <td>04:00PM A 08:00PM</td>
          </tr>
          <tr>
            <td>✔</td>
            <td>02:00PM A 08:00PM</td>
            <td>08:00PM A 10:00PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorariosAtencion;
