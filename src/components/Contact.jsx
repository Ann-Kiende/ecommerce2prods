import React from 'react';
import './Contact.css';
import callCenter from '../assets/callcenter.jpg';
import Dropdown from './dropdown';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { TbShoppingCartCancel } from 'react-icons/tb';
import { TbTruckReturn } from 'react-icons/tb';

const Contact = () => {
  return (
    <div className='contact-us'>
      <h2> NEED HELP? </h2>
      <div className='contact-desc'>
        <div className='c-paras'>
          <p>
            If you have inquiries or need assistance, do not hesitate to chat
            with us.
          </p>
          <p>
            We are available from Monday to Sunday between 9 am to 6 pm on Live
            Chats.
          </p>
          <p>
            For other inquiries, you can also reach us on +254700 000 000 from
            Monday to Friday between 9am to 6pm on calls.
          </p>
          <p>
            To place an order, call us on +254711 011 011 or WhatsApp us on
            +254700 000 000 from Monday to Sunday between 8am - 8pm.
          </p>
        </div>
        <div className='c-img'>
          <img src={callCenter} alt='Haba Haba Contact Center'></img>
        </div>
      </div>
      <div className='online-services'>
        <div className='on-heading'> Our Online Services </div>
        <div className='dropdown'>
          <Dropdown
            icon={<BsFillCartCheckFill />}
            title='How to track your order?'
            list={[
              'Click the drop-down arrow beside your name and select Orders.',
              <>
                Click <strong>SEE DETAILS</strong> in front of the order you
                want.
              </>,
              <>
                Click <strong>TRACK MY ITEM</strong> button in front of the
                order you wish to track.
              </>,
              'Delivery history is displayed',
            ]}
          />

          <Dropdown
            icon={<TbShoppingCartCancel />}
            title='How to cancel your order?'
            list={[
              <>
                From the list of Orders in your Jumia Account, Click{' '}
                <strong>SEE DETAILS</strong> in front of the order you wish to
                cancel.
              </>,
              'Click the Cancel Item button.',
              'Select the right quantity and cancellation reason from the drop-down list and submit.',
            ]}
          />

          <Dropdown
            icon={<TbTruckReturn />}
            title='How to return your order?'
            list={[
              <>
                Login and go to <strong>ORDERS</strong> Then click on the order
                of the item(s) you wish to return.
              </>,
              'Select the number of items you wish to return, the reason for the return, and give us more details to help us identify the issue with the product.',
              'Select your preferred refund method Click here to know more about the refund possibilities.',
              'Check your information and submit your return request.',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
