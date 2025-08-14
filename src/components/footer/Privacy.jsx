import React, { useState } from 'react';
import './Privacy.css';

const Privacy = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const showTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
    seconds
  )}`;
  return (
    <div className='privacy-container'>
      <div className='p-title'>
        <h2>Privacy Policy</h2>
        <p id='dateid'>Last Updated: {showTime}</p>
      </div>

      <ol className='p-ol'>
        <li className='p-li'>
          Information We Collect
          <p>Order Information:</p>
          <ul className='first p-ul'>
            <li>Name, email, phone number</li>
            <li>Shipping/billing address</li>
            <li>
              Payment details (processed securely via [Payment Processor])
            </li>
          </ul>
          <p>Automatically Collected:</p>
          <ul className='p-ul'>
            <li>IP address, browser type</li>
            <li>Pages visited (via cookies)</li>
            <li>Device information</li>
          </ul>
        </li>
        <li className='p-li'>
          How We Use Your Data
          <ul>
            <li>Process and fulfill orders</li>
            <li>Provide customer support</li>
            <li>Improve our products/services</li>
            <li>Send order updates (no spam)</li>
          </ul>
        </li>

        <li className='p-li'>
          Data Protection
          <p>We:</p>
          <ul>
            <li>Encrypt sensitive data (SSL/TLS)</li>
            <li>Never sell your information</li>
            <li>Limit access to essential staff</li>
          </ul>
        </li>

        <li className='p-li'>
          Third-Party Sharing
          <p>We only share with:</p>
          <ul>
            <li>Shipping carriers (for delivery)</li>
            <li>Payment processors (for transactions)</li>
            <li>Legal compliance (if required)</li>
          </ul>
        </li>

        <li className='p-li'>
          Your Rights
          <p>You can:</p>
          <ul>
            <li>Request access to your data</li>
            <li>Ask for corrections</li>
            <li>Opt out of marketing emails</li>
          </ul>
        </li>

        <li className='p-li'>
          Cookies
          <p>We use cookies to:</p>
          <ul>
            <li>Remember cart items</li>
            <li>Analyze website traffic</li>
            <li>Enhance your shopping experience</li>
          </ul>
        </li>

        <li className='p-li'>
          Policy Updates
          <p>We’ll notify you of changes via:</p>
          <ul>
            <li>Website banners</li>
            <li>Email (for major updates)</li>
          </ul>
        </li>
        <p>Contact Us</p>
        <p>
          📧 <strong>Email:</strong>{' '}
          <span id='support-more'>privacy@habahabastore.com</span>
        </p>
        <p>
          📞 <strong>Phone:</strong> +254700 000 000
        </p>
      </ol>
    </div>
  );
};

export default Privacy;
