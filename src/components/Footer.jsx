import React from 'react';
import '../scss/footer.module.scss';

const Footer = () => {
  return (
    <div>
        <footer>
            <h1>Copyright by SerapO {new Date().getFullYear()}</h1>
        </footer>
    </div>
  )
}

export default Footer