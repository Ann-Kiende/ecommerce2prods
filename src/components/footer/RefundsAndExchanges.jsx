import React from 'react';
import './RefundsAndExchanges.css';

const ReturnsAndExchanges = () => {
  return (
    <div className='policy'>
      <div className='r-title'>
        <h2>Haba Haba Cuticle Oil Policy</h2>
      </div>
      <ol className='r-ol'>
        <li className='r-li'>
          All Sales Are Final
          <ul>
            <p>
              We do not accept returns or exchanges on opened cuticle oil
              products due to:
            </p>
            <li>
              <strong>Hygiene regulations</strong> (personal care product
              safety)
            </li>
            <li>
              <strong>Product integrity </strong>(cannot verify storage
              conditions after delivery)
            </li>
            <li>
              <strong>Small batch production</strong> (handcrafted in limited
              quantities)
            </li>
          </ul>
        </li>

        <li className='r-li'>
          Damaged or Defective Products
          <ul>
            <p>Contact us within 24 hours of delivery if:</p>
            <li>Bottle is leaking or broken</li>
            <li>Seal was tampered with during shipping</li>
            <li>Wrong product was received</li>
          </ul>
        </li>

        <li className='r-li'>
          Contact Process for Refunds
          <ol className='r-inner'>
            <p>
              📧 Email: <span id='support-more'>support@habahabastore.com</span>{' '}
              with:
            </p>
            <li>Order number</li>
            <li>Photos of damaged item + packaging</li>
            <li>Brief description of issue</li>
          </ol>
          <p>
            After verification, we will <strong>replace immediately</strong> or
            issue a full refund.
          </p>
        </li>

        <li className='r-li'>
          Choosing Your Products Carefully
          <ol>
            <p>Recommendations:</p>
            <li>
              Review product descriptions and ingredient lists before purchasing
            </li>
            <li>Start with our travel size to test new scents</li>
            <li>Contact us for personalized recommendations</li>
          </ol>
        </li>
      </ol>
      <h4 className='r-subheading'>Customer Support</h4>
      <p>
        ✉️ <strong>Email:</strong> care@habahabastore.com
      </p>
      <p>
        📞 <strong>Phone:</strong> +254700 000 000{' '}
      </p>
      <p>
        ⏰ <strong>Response Time:</strong> Within 1 business day
      </p>
    </div>
  );
};

export default ReturnsAndExchanges;
