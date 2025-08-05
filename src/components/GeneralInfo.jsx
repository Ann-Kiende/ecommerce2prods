import React from 'react';
import ProductCard from 'ProductCard';
import { createBrowserRouter } from 'react-router-dom';

const GeneralInfo = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/products', element: <ProductCard /> },
    { path: '/about', element: <About /> },
  ]);

  return (
    <div>
      <h1>Privacy Policy for Haba Haba</h1>
      <p class='last-updated'>Last Updated: [Date]</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Data:</strong> Name, email, shipping address when you
          order
        </li>
        <li>
          <strong>Payment Info:</strong> Processed securely by [Stripe/PayPal]
          (we never store card details)
        </li>
        <li>
          <strong>Automated Data:</strong> Browser type, IP address (via
          cookies) for basic analytics
        </li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <ul>
        <li>Process and ship orders</li>
        <li>Respond to customer service requests</li>
        <li>
          Send order confirmations (no marketing emails unless you opt-in)
        </li>
      </ul>

      <h2>3. Data Sharing</h2>
      <ul>
        <li>
          <strong>Never sold</strong> to third parties
        </li>
        <li>
          Shared only with:
          <ul>
            <li>Shipping carriers (UPS/FedEx)</li>
            <li>Payment processors</li>
            <li>Legal requirements (if compelled by law)</li>
          </ul>
        </li>
      </ul>

      <h2>4. Cookies</h2>
      <ul>
        <li>Essential cookies for checkout functionality</li>
        <li>Option to disable via browser settings</li>
      </ul>

      <h2>5. Security</h2>
      <ul>
        <li>SSL encryption on all pages</li>
        <li>PCI-compliant payment processing</li>
      </ul>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Request order data deletion (email [your email])</li>
        <li>Opt out of non-essential cookies</li>
      </ul>

      <h2>7. Changes to Policy</h2>
      <p>Updates posted on this page</p>

      <div class='contact'>
        <h2>Contact</h2>
        <p>
          Email <a href='mailto:[your email]'>[byanittabeauty@gmail.com]</a> for
          privacy questions
        </p>
      </div>
    </div>
  );
};

export default GeneralInfo;
