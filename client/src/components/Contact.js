import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <>
  {/* Created By CodingLab - www.codinglabweb.com */}
  <meta charSet="UTF-8" />
  <title> Responsive Contact Us Form | CodingLab </title>
  <link rel="stylesheet" href="style.css" />
  {/* Fontawesome CDN Link */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt" />
          <div className="topic">Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt" />
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope" />
          <div className="topic">Email</div>
          <div className="text-one">codinglab@gmail.com</div>
          <div className="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>
          If you have any work from me or any types of quries related to my
          tutorial, you can send me message from here. It's my pleasure to help
          you.
        </p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div> 
          <div className="button">
            <input type="button" defaultValue="Send Now" />
          </div>
        </form>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default Contact