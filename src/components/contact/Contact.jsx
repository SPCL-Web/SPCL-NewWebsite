import React, { useEffect, useState } from 'react';
import axios from 'axios';import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '






  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [id, setId] = useState('');
  const options = [
    { label: "Not Seen", value: "Not Seen" },
    { label: "Seen", value: "Seen" },
    { label: "Resolved", value: "Resolved" },
    { label: "Resolving", value: "Resolving" },
    { label: "Ongoing", value: "Ongoing" },
  ];
  const [statuses, setStatuses] = useState([]);

  const handleSelect = (index, e) => {
    const newStatuses = [...statuses];
    newStatuses[index] = e.target.value;
    setStatuses(newStatuses);
    localStorage.setItem('statuses', JSON.stringify(newStatuses)); // Save to localStorage
  };

  const getUserDetails = async () => {
    try {
      const responseData = await axios.get('http://localhost:4000/api/v1/get-contact');
      setData(responseData.data.response);
      // Initialize statuses based on fetched data
      const savedStatuses = JSON.parse(localStorage.getItem('statuses')) || [];
      const initialStatuses = responseData.data.response.map((user, index) => savedStatuses[index] || options[0].value);
      setStatuses(initialStatuses);
    } catch (error) {
      console.log("Error in getting user Details");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, query);

    try {
      await axios.post('http://localhost:4000/api/v1/contact', {
        name,
        email,
        phone,
        query
      });
      setName("");
      setEmail("");
      setPhone("");
      setQuery("");
    } catch (error) {
      console.log("Error in handle Submit", error);
    }
  };


  useEffect(() => {
    getUserDetails();
  }, []);





  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action='' onSubmit={handleSubmit}>
              <div className='flexSB'>
            
                <input
                    type="text"
                    placeholder='Enter Your Name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
              
                <input
                    type="text"
                    placeholder='Enter Your Phone'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />

                
                <input
                    type="text"
                    placeholder='Enter Your Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </div>



              <label htmlFor="">Query</label>
                <input
                    type="text"
                    placeholder='Enter Your Query'
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <br />
              {/* <textarea cols='30' rows='10'>
                Create a message here...
              </textarea> */}
              {/* <button className='primary-btn'>SEND MESSAGE</button> */}
              <button className='primary-btn' type='submit'>Submit</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
