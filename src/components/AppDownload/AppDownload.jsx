import React from 'react';
import './AppDownload.css';

export const AppDownload = () => {
  return (
    <>
        <div className="app-download" id='app-download'>
            <p>For Better Experience Download<br/>Zomato App</p>
            <div className="app-download-platforms">
                <img src={'assets/play_store.png'} />
                <img src={'assets/app_store.png'} />
            </div>
        </div>
    </>
  )
}