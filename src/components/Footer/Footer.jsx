import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative bg-black text-white py-12 border-t-2 border-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="p-6 flex flex-col">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
              Company
            </h3>
            <ul className="flex-1 flex flex-col justify-between">
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
              Support
            </h3>
            <ul className="flex-1 flex flex-col justify-between">
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
              Legals
            </h3>
            <ul className="flex-1 flex flex-col justify-between">
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="mb-4">
            <Logo width="100px" alt="Company Logo" />
          </div>
          <p className="text-sm text-gray-400 text-center">
            &copy; 2024 CareerSync. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
