import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaYoutube from 'react-icons/lib/fa/youtube-play';
import FaGithub from 'react-icons/lib/fa/github-alt';
import FaInstagram from 'react-icons/lib/fa/instagram';

export default () => (
  <footer>
    <div className="footer__container">
      <div className="footer__content">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UCZ2EgRcIyY8lcHz0c5-lOUw">
              <FaYoutube size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/coderplex">
              <FaFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="https://github.com/coderplex">
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/coderplex/">
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="https://www.meetup.com/coderplex/">m</a>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      footer {
        padding: 50px 0;
        background: #314159;
        color: #fff;
      }
      .footer__container {
        max-width: 1280px;
        margin: 0 auto;
      }
      .footer__content {
        text-align: center;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      ul li {
        margin: 0 10px;
      }
      ul li a {
        width: 50px;
        height: 50px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-decoration: none;
        border: 1px solid #fff;
        border-radius: 50%;
        transition: all 0.25s;
        font-weight: bold;
      }
      ul li a:hover {
        background: #fff;
        color: #314159;
      }
    `}</style>
  </footer>
);
