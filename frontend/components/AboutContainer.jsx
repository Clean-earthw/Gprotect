import React from 'react'

const AboutContainer = () => {
  return (
    
    <div className="max-w-[1240px] mx-auto">
      <div className="flex flex-col justify-center">
        <p className="text-[#c33232] text-6xl font-bold pb-12">
          About Us
        </p>
        <h1 className="text-black md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Got Phish? No fear!
        </h1>
        <p className="text-black md:text-xl sm:text-3xl text-2xl font-semibold py-8">
          🎣 Tired of swimming in the sea of phishing emails? Dive into
          safety with Got Phish! We're your digital lifeguard, dedicated
          to protecting small businesses in the bustling waters of NYC
          from phishing threats.
        </p>
        <p className="text-black md:text-xl sm:text-3xl text-2xl font-semibold py-8">
          🏖️ Log in with your Gmail, and let our AI, powered by a dataset
          sea, analyze your emails. We'll display a clear signal: which
          emails are likely safe and which ones are phishing – making your
          inbox a haven.
        </p>
        <p className="text-black md:text-xl sm:text-3xl text-2xl font-semibold py-8">
          🌐 Utilizing the Google API for seamless email retrieval and the
          Cohere API for intelligent analysis, we ensure a smooth sailing
          experience for our users. Our backend, equipped with Kaggle's
          phishing dataset, dives deep into the digital waves to tag
          overall email safety. So, why get caught in phishing nets when
          you can ride the Got Phish wave?
        </p>
        <p className="text-black md:text-xl sm:text-3xl text-2xl font-semibold py-8">
                Copyright &copy; 2024 GProtect
        </p>
      </div>
    </div>
  
  )
}

export default AboutContainer