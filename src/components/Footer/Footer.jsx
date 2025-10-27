import React, { useEffect, useState } from 'react';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer className='bg-body-tertiary' id='footer'>
        <p className='pt-3 m-0 text-center'>Al Firdaousse, 2025-{newDate}</p>
        <p className='pb-3 m-0 text-center'>Designed and developed by Meskour Lhoussaine</p>
    </footer>
  )
}

export default Footer;