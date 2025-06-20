import React, { useState,useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setPrevPrompts,setRecentPrompt ,newChat} = useContext(context);

  const loadPrompt= async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setExtended(!extended)} className="menu" src={assets.menu_icon} alt=""></img>
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt=""></img>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={() =>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt=""></img>
                  <p>{item.slice(0,18)}...</p>
                  </div>
              )
            })}
            
          </div>
        ) : null}

      </div>
      <div className="bottom">
        <div className="bottom-items recent-entry">
          <img src={assets.question_icon} alt=""></img>
          { extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.history_icon} alt=""></img>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.setting_icon} alt=""></img>
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
