import React from 'react';
import './TikTok.scss';

export default function TikTok({ children: brandName, className }) {
  return (
    <div className="douyin-style">
      <div className="douyin-style-font">
        <div className="douyin-style-title" data-title={brandName}>
          <span>{brandName}</span>
        </div>
      </div>
    </div>
  );
}
