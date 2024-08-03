'use client'
import React from 'react';
import Image from 'next/image';

const HeroOne = () => {
  return (
    <div className="bg-white  max-w-[1500px] mx-auto space-x-9 break-before-page shadow-2xl">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <p className="text-customRed text-2xl font-extrabold pb-4">
          Strengthen Your Defenses Against Rising Cyber Threats
        </p>
        <h1 className="text-black md:text-3xl sm:text-3xl  text-3xl font-bold py-4">
          With a 53% increase in cyberattacks from 2016-2022 and an
          estimated loss of over $775 million in 2022 alone, securing your
          data is crucial
        </h1>
        <p className="text-black text-2xl">
          Our advanced AI-driven phishing detection system empowers NYC
          businesses to identify and thwart phishing emails, safeguarding
          against potential privacy invasions, identity theft, and fraud.
          Don't be a victim – fortify your defenses with us today.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://www.osc.ny.gov/press/releases/2023/10/cyberattack-complaints-in-new-york-rise-53-percent",
              "_blank"
            )
          }
          className="bg-customRed text-[#e3f8f6] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 shadow-lg"
        >
          Go To Source
        </button>
      </div>
      {/**image */}
      <Image 
         src={'/fraud.png'} 
         className="align-items-center justify-center"
         width={500}
         height={500}
         />
    </div>
    <p className="text-black md:text-xl sm:text-3xl text-2xl items-center justify-center font-semibold py-8">
     Copyright &copy; 2024 GProtect
     </p>
  </div>
  )
}

export default HeroOne