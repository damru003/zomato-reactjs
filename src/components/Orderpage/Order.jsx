import React, { useContext, useState } from 'react';
import './Order.css';
import { StoreContext } from '../context/StoreContext';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';

export const Order = () => {
  const { getTotalCartAmount, setCartitems } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validate = () => {
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;
    const zipCodeRegex = /^[0-9]{5,6}$/; // Adjust based on the zip code length requirement

    if (!formData.firstName) tempErrors.firstName = 'Required';
    if (!formData.lastName) tempErrors.lastName = 'Required';
    if (!emailRegex.test(formData.email)) tempErrors.email = 'Required';
    if (!formData.street) tempErrors.street = 'Required';
    if (!formData.city) tempErrors.city = 'Required';
    if (!formData.state) tempErrors.state = 'Required';
    if (!zipCodeRegex.test(formData.zipCode)) tempErrors.zipCode = 'Required';
    if (!formData.country) tempErrors.country = 'Required';
    if (!phoneRegex.test(formData.phone)) tempErrors.phone = 'Required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;  // Only proceed if the form is valid

    setIsSubmitting(true);
    const doc = new jsPDF();

    // Add PDF content as before
    doc.setFontSize(20);
    doc.text('Invoice', 90, 10);
    doc.setFontSize(12);
    doc.text(`First Name: ${formData.firstName}`, 20, 30);
    doc.text(`Last Name: ${formData.lastName}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Street: ${formData.street}`, 20, 60);
    doc.text(`City: ${formData.city}`, 20, 70);
    doc.text(`State: ${formData.state}`, 20, 80);
    doc.text(`Zip Code: ${formData.zipCode}`, 20, 90);
    doc.text(`Country: ${formData.country}`, 20, 100);
    doc.text(`Phone: ${formData.phone}`, 20, 110);

    doc.autoTable({
      startY: 120,
      head: [['Description', 'Amount (Rs.)']],
      body: [
        ['SubTotal', `${getTotalCartAmount()}/-`],
        ['Delivery Charges', `20/-`],
        ['Total', `${getTotalCartAmount() + 20}/-`],
      ],
    });

    doc.save('Order.pdf');
    setIsSubmitting(false);
    navigate('/');
    setCartitems({});
  };

  return (
    <>
      <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>

          <div className="multi-input">
            <input 
              type='text' 
              name='firstName'
              placeholder='First Name' 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="error" style={{color:'red'}}>{errors.firstName}</p>}
            
            <input 
              type='text' 
              name='lastName'
              placeholder='Last Name' 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="error" style={{color:'red'}}>{errors.lastName}</p>}
          </div>

          <input 
            type='email' 
            name='email'
            placeholder='Email Address' 
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error" style={{color:'red',marginTop:'-10px'}}>{errors.email}</p>}
          
          <input 
            type='text' 
            name='street'
            placeholder='Street' 
            value={formData.street}
            onChange={handleChange}
            required
          />
          {errors.street && <p className="error" style={{color:'red',marginTop:'-10px'}}>{errors.street}</p>}

          <div className="multi-input">
            <input 
              type='text' 
              name='city'
              placeholder='City' 
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <p className="error" style={{color:'red'}}>{errors.city}</p>}
            
            <input 
              type='text' 
              name='state'
              placeholder='State' 
              value={formData.state}
              onChange={handleChange}
              required
            />
            {errors.state && <p className="error" style={{color:'red'}}>{errors.state}</p>}
          </div>

          <div className="multi-input">
            <input 
              type='text' 
              name='zipCode'
              placeholder='Zip Code' 
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            {errors.zipCode && <p className="error" style={{color:'red'}}>{errors.zipCode}</p>}
            
            <input 
              type='text' 
              name='country'
              placeholder='Country' 
              value={formData.country}
              onChange={handleChange}
              required
            />
            {errors.country && <p className="error" style={{color:'red'}}>{errors.country}</p>}
          </div>

          <input 
            type='text' 
            name='phone'
            placeholder='Phone' 
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="carts-total-details">
                <p>SubTotal</p>
                <p>Rs.{getTotalCartAmount()}/-</p>
              </div>
              <hr />

              <div className="carts-total-details">
                <p>Delivery Charges</p>
                <p>Rs.{20}/-</p>
              </div>
              <hr />

              <div className="carts-total-details">
                <b>Total</b>
                <b>Rs.{getTotalCartAmount() + 20}/-</b>
              </div>
              <button onClick={handleCompleteOrder} disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Complete Order"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
