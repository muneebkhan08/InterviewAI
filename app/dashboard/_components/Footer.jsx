import React from 'react';
import {
  FaLinkedin,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="relative text-black shadow-md py-5 bg-gray-200"
    >

      {/* Footer Content */}
      <div className="relative py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 animate-pulse text-primary">
          Stay Connected
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-8 text-5xl">
          <a
            href="https://www.linkedin.com/in/muhammadmuneebkhan8304"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://discord.com/users/1178243724824825896"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaDiscord />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100064171872590"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaFacebook />
          </a>

          <a
            href="https://x.com/MuneebKhan0834?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/muhammadmuneeb_khan/profilecard/?igsh=dDJqZXJ0MG4zMDMz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-primary
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <FaInstagram />
          </a>
        </div>

        <p className="mt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} Muneeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
