import React from 'react';
import EmailModal from './Components/EmailModal';
import MailsTopBar from './Components/MailsTopBar';
import { useGlobalContextProvider } from '@/providers/ContextProvider';
import { darkModeColor, defaultColor } from "@/colors";
import {GppGoodOutlinedIcon,PhishingOutlinedIcon} from '@mui/icons-material';

function Inbox({ folder }) {
  const [selectedEmail, setSelectedEmail] = React.useState(null);
  const {
    darkModeObject: { isDarkMode },
  } = useGlobalContextProvider();

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleModalClose = () => {
    setSelectedEmail(null);
  };

  return (
    <div  
    style={{
      backgroundColor: isDarkMode
        ? darkModeColor.backgroundSlate
        : defaultColor.backgroundSlate,
      color: isDarkMode ? darkModeColor.textColor : defaultColor.textColor,
    }}
     className=" w-full mt-5 p-6 flex flex-col gap-6 rounded-md" >
    <MailsTopBar/>

      {folder.length < 1 ? (
        <h4 >This folder is empty.</h4>
      ) : (
        folder.map((email, index) => (
          <div
            key={index}
            className="cursor-pointer flex items-center justify-between mb-4 p-6 rounded-lg transition-all duration-300"
            onClick={() => handleEmailClick(email)}>
              <div>
                <p className="text-xl font-bold text-gray-800">{email.subject}</p>
                <p className="text-sm text-gray-600">{email.from}</p>
              </div>
              <button
                style={{
                  background: email.phish ? "#ff4d4f" : "#52c41a",
                  color: "white",
                }}
                className="px-4 py-2 rounded-full"
              >
                {email.phish ? (
                  <div className="flex">
                    <PhishingOutlinedIcon />
                    <span style={{ marginLeft: '2px' }}>Phishing</span>
                  </div>
                ) : (
                  <div className="flex">
                    <GppGoodOutlinedIcon />
                    <span style={{ marginLeft: '2px' }}>Safe</span>
                  </div>
                )}
              </button>
            </div>
          ))
        )}
        {selectedEmail && (
          <EmailModal email={selectedEmail} onClose={handleModalClose} />
        )}
      </div>
  );
}

export default Inbox;