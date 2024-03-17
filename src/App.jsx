import React, { useEffect, useState } from "react";
import { Message } from "./components/Message";
import { Err } from "./components/Err";
import './App.scss';
import { BigImg } from "./components/BigImg/BigImg";
import cl from 'classnames'

export const App = () => {
  const [serverData, setServerData] = useState();
  const [bigImg, setBigImg] = useState();

  useEffect(() => {
    const params = new URL(document.location).search;

    fetch(`http://answer.activegroup.com.ua/telegram_bot/server:5000${params}`)
      .then(response => response.json())
      .then(data => setServerData(data));
  }, []);



  console.log(serverData);

  return (
    <div className={cl('chat', {
      'chat--with-big-img': bigImg,
    })}>
      {!serverData
        ? 'Loading...'
        : serverData.err
          ? <Err err={serverData.err} />
          : serverData.map(message => (
            <Message
              message={message}
              key={message.id}
              setBigImg={setBigImg}
            />))}
      {bigImg
        && <BigImg src={bigImg} setBigImg={setBigImg} />}

    </div>
  );
}