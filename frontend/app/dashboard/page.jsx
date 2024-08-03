"use client";

import React, { useEffect, useState, useCallback ,useRef} from "react";
import Sidebar from "@/components/Sidebar";
import { useGlobalContextProvider } from "@/providers/ContextProvider";
import { menuItemType } from "@/types/MenuItemsTypes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { darkModeColor, defaultColor } from "@/colors";
import Inbox from "@/components/inbox/Inbox";
import Spam from "@/components/spam/spam";
import Trash from "@/components/Trash/trash";
import LoadingScreen from "@/components/LodingScreen";


function Dashboard() {
  const { menuItemsObject, darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const { menuItems } = menuItemsObject;
  const [selectedMenu, setSelectedMenu] = useState(null);
  let selectComponent = null;

  
  const [setup, setSetup] = useState(false);
  // let setupInbox = false;
  // let setupSpam = false;
  // let setupTrash = false;
  const [setupInbox, setSetupInbox] = useState(false);
  const [setupSpam, setSetupSpam] = useState(false);
  const [setupTrash, setSetupTrash] = useState(false);
  const [loadingText, setLoadingText] = useState("Fetching your emails...");

  const readyCount = useRef(0);

  const [loading, setLoading] = useState(true);

  const [googleToken, setGoogleToken] = useState();
  // const [inboxRaw, setInboxRaw] = useState([]);
  // const [spamRaw, setSpamRaw] = useState([]);
  // const [trashRaw, setTrashRaw] = useState([]);
  const inboxRaw = useRef([]);
  const spamRaw = useRef([]);
  const trashRaw = useRef([]);
  const inbox = useRef([]);
  const spam = useRef([]);
  const trash = useRef([]);

  const subject = useRef("");
  const from = useRef("");
  const date = useRef("");
  const message = useRef("");
  const phish = useRef(false);
  const decoded_data = useRef();

  const api_phish1 = useRef(false);
  const api_phish2 = useRef(false);
  

  async function trained_model_query(query) {
    if (loading === false) return;

    return fetch("https://simpleflask-tjm4lrussq-uc.a.run.app/tuned_gemini_query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "Phishing") return true;
        return false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  async function general_model_query(query) {
    if (loading === false) return;
    return fetch("https://simpleflask-tjm4lrussq-uc.a.run.app/gemini_query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "Phishing") return true;
        return false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getFolder(folder) {
    await fetch(
      `https://www.googleapis.com/gmail/v1/users/me/messages?q=label:${folder}&maxResults=10`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${googleToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data || (data && !data.messages)) {
          if (folder === "spam") setSetupSpam(true);
          if (folder === "trash") setSetupTrash(true);
          if (folder === "inbox") setSetupInbox(true);
          readyCount.current += 1;
          if (readyCount.current > 2) {
            setLoading(false);
          }
          return;
        }
        for (let i = 0; i < data.messages.length; i++) {
          let length = data.messages.length;
          const emailId = data.messages[i]?.id;
          if (emailId) {
            fetch(
              `https://www.googleapis.com/gmail/v1/users/me/messages/${emailId}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${googleToken}`,
                },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (folder === "spam") spamRaw.current.push(data);
                if (folder === "trash") trashRaw.current.push(data);
                if (folder === "inbox") inboxRaw.current.push(data);

                if (length - 1 <= i) {
                  if (folder === "spam") setSetupSpam(true);
                  if (folder === "trash") setSetupTrash(true);
                  if (folder === "inbox") setSetupInbox(true);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function setFolder(folder, newFolder) {
    setLoadingText("Decoding your emails...")

    for (let j = 0; j < folder.current.length; j++) {
      for (let i = 0; i < folder.current[j].payload.headers.length; i++) {
        if (folder.current[j].payload.headers[i].name === "From") {
          from.current = folder.current[j].payload.headers[i].value;
        }
        if (folder.current[j].payload.headers[i].name === "Subject") {
          subject.current = folder.current[j].payload.headers[i].value;
        }
        if (folder.current[j].payload.headers[i].name === "Date") {
          date.current = folder.current[j].payload.headers[i].value;
        }
      }

      if (
        !folder.current[j].payload.parts ||
        !folder.current[j].payload.parts[0].body ||
        !folder.current[j].payload.parts[0].body.data
      ) {
        decoded_data.current = folder.current[j].snippet;
      } else {
        decoded_data.current = await fetch("https://simpleflask-tjm4lrussq-uc.a.run.app/decode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: folder.current[j].payload.parts[0].body.data,
          }),
        })
          .then((response) => response.json())
          .then((decodedData) => {
            return decodedData.decoded_data;
          })
          .catch((error) => {
            console.error("Error sending POST request to Flask:", error);
          });
      }

      message.current = "" + decoded_data.current;
     


      let query =
        "From: " + from + " Subject: " + subject + " Message: " + message;
      let count = 0;

      setLoadingText("Analyzing your emails...")

      api_phish1.current = await trained_model_query(query);

      api_phish2.current = await general_model_query(query);

    

      if (api_phish1.current === true) count++;
      if (api_phish2.current === true) count++;
     
      if (count > 1) phish.current = true;

      newFolder.current.push({
        from: from.current,
        subject: subject.current,
        date: date.current,
        message: message.current,
        phish: phish.current,
      });
    }

    newFolder.current.push({
      from: "Amaz0n Prime <prime@accounts.amaz0n.com>",
      subject: "Refund Pending",
      date: date.current,
      message: "Hello, We have noticed that you have a pending refund. Please click the link to claim your refund. Thank you.",
      phish: true,
    });

    console.log(newFolder.current);
    readyCount.current += 1;
    if (readyCount.current > 2) {
      setLoading(false);
    }
  }

  async function fetchGoogleToken() {
    const filePath = "https://simpleflask-tjm4lrussq-uc.a.run.app/google_token";

    const response = await fetch(filePath);

    if (!response.ok) return;

    const jsonData = await response.json();
    if (!jsonData) return;
    if (jsonData && !jsonData.credentials_token) return;

    setGoogleToken(jsonData.credentials_token);
  }

  useEffect(() => {
    fetchGoogleToken();
  }, []);

  useEffect(() => {
    if (googleToken && !setup) {
      setSetup(true); // Set a flag to prevent repeated setups
      getFolder("inbox");
      getFolder("spam");
      getFolder("trash");
    }
  }, [googleToken, setup]);

  useEffect(() => {
    if (
      setupInbox === true &&
      setupSpam === true &&
      setupTrash === true &&
      loading === true
    ) {
      setLoadingText("Loading your emails...")
      if (spamRaw.current.length > 0) {
        setFolder(spamRaw, spam);
      }
      if (trashRaw.current.length > 0) {
        setFolder(trashRaw, trash);
      }
      if (inboxRaw.current.length > 0) {
        setFolder(inboxRaw, inbox);
      }
    }
  }, [setupInbox, setupSpam, setupTrash]);

  const requestPermission = useCallback(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Permission is granted");
        }
      });
    }
  }, []);

  useEffect(() => {
    console.log("requesting permission");

    if ("Notification" in window) {
      requestPermission();
    }
  }, [requestPermission]);

  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectedMenu(singleItem);
      }
    });
  }, [menuItems]);

  switch (selectedMenu?.name) {
    case "Inbox":
      selectComponent = <Inbox folder={inbox.current}/>;
      break;
    case "Spam":
      selectComponent = <Spam folder={spam.current} />;
      break;
    case "Trash":
      selectComponent = <Trash folder={trash.current} />;
      break;
    case "All Areas":
      break;
  }

  
  if (loading === true) {
    return (
      <div className="flex items-center justify-center h-screen bg-transparent background-image">
            <div className="text-center bg-transparent">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
      <LoadingScreen/>
      </div>
      </div>
      </div>
    );
  }


  return (
    <div
      style={{
        backgroundColor: isDarkMode
          ? darkModeColor.backgroundSlate
          : defaultColor.backgroundSlate,
      }}
      className="flex   "
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Sidebar />
        {selectComponent}
        <BlackSoftLayer />
      </LocalizationProvider>
    </div>
  );
}

export default Dashboard;

function BlackSoftLayer() {
  const {
    openSideBarObject,
    habitWindowObject,
    openConfirmationWindowObject,
    openAreaFormObject,
  } = useGlobalContextProvider();
  const { openSideBar } = openSideBarObject;
  const { openHabitWindow } = habitWindowObject;
  const { openConfirmationWindow } = openConfirmationWindowObject;
  const { openAreaForm } = openAreaFormObject;
  return (
    <div
      className={`w-full h-full bg-black fixed top-0 left-0 opacity-20 z-40 ${
        openSideBar || openHabitWindow || openConfirmationWindow || openAreaForm
          ? "fixed"
          : "hidden"
      }`}
    ></div>
  );
}
