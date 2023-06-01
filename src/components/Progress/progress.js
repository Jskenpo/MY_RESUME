import React from 'react';
import './progress.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';;


function Progress({ porcentaje, color, lenguaje, cantidad }) {
    return (
        <div className="progressBar_language">
            <h3>{lenguaje}: {porcentaje}</h3>
            <ProgressBar variant={color} now={cantidad} />
        </div>
    );
}
export default Progress;