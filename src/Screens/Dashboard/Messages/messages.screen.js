import React, { useState, useEffect } from 'react';

// Backend API
import { getAllMessages } from "../../../Services/API/send-msg.ap";

// Components
import { Header } from "../../../Components/Header";
import { MessagesComponent } from "./components/messages.component";

export const MessagesScreen = () => {

    document.title = `All Messages (24)`;

    const [messages, setMessages] = useState();

    useEffect( () => {
        getAllMessages(setMessages);
    }, [] )

    return (
        <div>
            <Header type="Dashboard" />

            <div className="fill__details__cont">
                <h2 className="fill__details__h2">Messages ({ messages && messages.length })</h2>

                <div className="all__msg__cont">
                    { messages && messages.map( (item, i) => (
                        <MessagesComponent item={ item } key={ i } />
                    ) ) }
                </div>
            </div>
        </div>
    )
}
