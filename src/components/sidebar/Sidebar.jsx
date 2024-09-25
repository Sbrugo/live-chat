import "./sidebar.css"
import {assets} from "@/assets/assets"
import React from 'react'
import Icon from "@components/icon/Icon"
import EntryMessage from "./sidebarcomponents/entrymessaje/EntryMessage"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img className="menu" src={assets.menu_icon} alt="Menu Icon"/>
            <div className="new-chat">
                <Icon asset="plus_icon" alt="Plus" text="New Chat"></Icon>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <EntryMessage text="What is React ..."/>
                    <EntryMessage text="What is Docker ..."/>
                    <EntryMessage text="What are fullstack projects ..."/>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <Icon asset="question_icon" alt="Question" text="Help"></Icon>
            </div>
            <div className="bottom-item recent-entry">
                <Icon asset="history_icon" alt="History" text="History"></Icon>
            </div>
            <div className="bottom-item recent-entry">
                <Icon asset="setting_icon" alt="Settings" text="Settings"></Icon>
            </div>
        </div>
    </div>
  )
}

export default Sidebar