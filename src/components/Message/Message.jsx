import './Message.scss';
import cl from 'classnames'

export const Message = ({ message, setBigImg }) => {
  const { textMessage: text, photoMessage: photo, name, isOperator, messageIds, replyToMessage } = message;
  const messageId = isOperator
    ? messageIds.getterIg
    : messageIds.senderId;

  const date = new Date(message.date);
  const msgDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  const msgTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div
      className={cl('message', {
        'message--operator': isOperator,
        'message--customer': !isOperator,
      })}
      id={messageId}
    >
      <h3
        className='message__title'
      >
        {name}
      </h3>
      {replyToMessage?.text
        && (<p
          className={cl('message__reply', {
            'message__reply--customer': !isOperator,
            'message__reply--operator': isOperator,
          })}
        >
          {replyToMessage.text}
        </p>)}
      {replyToMessage?.photoId
        &&
        (<img
          src={replyToMessage.photoId}
          alt='img'
          className='message__reply message__reply--img'
        ></img>)}
      {text
        &&
        (<p className='message__text'>
          {text}
        </p>)}
      {photo
        && (
          <img
            className='message__img'
            src={photo}
            alt='img'
            onClick={() => setBigImg(photo)}
          ></img>
        )}
      <div className='message__data-time'>
        <span className='message__data'>{msgDate}</span>
        <span className='message__time'>{msgTime}</span>
      </div>
    </div>
  );
};