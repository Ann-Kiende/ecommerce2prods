import React from 'react';
import './Shipping.css';

const Shipping = () => {
  return (
    <div className='shipping-container'>
      <div className='s-title'>
        <h2>Shipping Policy</h2>
        <p>
          Thank you for shopping at <strong>Haba Haba!</strong> We strive to
          ensure your orders are processed quickly and delivered safely to your
          doorstep. Please review our shipping policy below for details on
          delivery times, shipping methods, and other important information.
        </p>
      </div>

      <ol className='s-ol'>
        <li className='s-li'>
          Processing Time
          <ul>
            <li>
              All orders are processed within <strong>1-3 business days</strong>{' '}
              (excluding weekends and holidays) after payment confirmation.
            </li>
            <li>
              Orders placed after <strong>12 PM (GMT+3)</strong> or on
              weekends/public holidays will be processed the next business day.
            </li>
          </ul>
        </li>
        <li className='s-li'>
          Shipping Options & Delivery Times
          <p>We offer the following shipping methods (may vary by location):</p>
          <table>
            <tr>
              <th>Shipping Method</th>
              <th>Estimated Delivery Time</th>
              <th>Coverage</th>
            </tr>
            <tr>
              <td>Standard Shipping</td>
              <td>3-7 business days</td>
              <td>Nationwide (Kenya)</td>
            </tr>
            <tr>
              <td>Express Shipping</td>
              <td>1-3 business days</td>
              <td>Major Cities (Nairobi, Mombasa, Kisumu, etc.)</td>
            </tr>
            <tr>
              <td>International Shipping*</td>
              <td>7-21 business days</td>
              <td>Selected Countries</td>
            </tr>
          </table>
          <p>*International shipping rates and times vary by destination.</p>
        </li>
        <li className='s-li'>
          Shipping Fees
          <ul>
            <li>
              <strong>Free Shipping </strong>on orders over{' '}
              <strong>KSh 5,000</strong> (Kenya only).
            </li>
            <li>
              Standard Shipping: <strong>KSh 300</strong> (within Kenya).
            </li>
            <li>
              Express Shipping: <strong>KSh 600</strong> (within major cities).
            </li>
            <li>
              International Shipping: Calculated at checkout based on
              destination.
            </li>
          </ul>
        </li>
        <li className='s-li'>
          Order Tracking
          <ul>
            <li>
              Once your order is shipped, you’ll receive a{' '}
              <strong>confirmation email</strong> with a tracking number to
              monitor your package.
            </li>
            <li>
              For any delays or issues, contact us at{' '}
              <span id='support-more'>support@habahabastore.com</span> or call{' '}
              <strong>+254700 000 000 </strong>
            </li>
          </ul>
        </li>
        <li className='s-li'>
          Delivery Issues
          <ul>
            <li>
              <strong>Failed Deliveries:</strong> If a delivery fails due to an
              incorrect address, the customer is responsible for reshipment
              costs.
            </li>
            <li>
              <strong>Lost/Damaged Packages:</strong> Report lost or damaged
              items within 48 hours of delivery for assistance.
            </li>
          </ul>
        </li>
        <li className='s-li'>
          International Shipping (Where Applicable)
          <ul>
            <li>
              Customs fees, taxes, or import duties are the{' '}
              <strong>customer’s responsibility.</strong>
            </li>
            <li>Delivery times may vary due to customs clearance.</li>
          </ul>
        </li>
        <li className='s-li'>
          Returns & Refunds
          <p>
            Please refer to our <span id='support-more'>Return Policy</span> for
            details on returns, refunds, and exchanges.
          </p>
        </li>
        <li className='s-li'>
          Contact Us
          <p>For any shipping-related questions, reach out to:</p>
          <p>
            📧 <strong>Email:</strong>{' '}
            <span id='support-more'>support@habahabastore.com</span>
          </p>
          <p>
            📞 <strong>Phone:</strong> +254700 000 000
          </p>
          <p>
            📍 <strong>Address:</strong> Nairobi, Kenya
          </p>
        </li>
      </ol>
      <p>
        Thank you for choosing <strong>Haba Haba!</strong> We appreciate your
        trust and look forward to serving you.
      </p>
    </div>
  );
};

export default Shipping;
