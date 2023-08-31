import "../../assets/styles/css/ChatPage.css";

import chatRocketGradation   from "../../assets/images/chat_rocket_gradation.svg";
import chatMessageGradation  from "../../assets/images/chat_message_gradation.svg";
import matchedAlienGradation from "../../assets/images/matched_alien_gradation.svg";
import unknownUser           from "../../assets/images/icon_header_UnknownUser.svg";
import serialUnknownUser     from "../../assets/images/chat_serial_unknown_user.png";
import arrowRight            from "../../assets/images/arrow_right.svg";

export const ChatPage = () => {
  return(
    <div className="chat-screen">
      <header className="chat-header-wrap">
        <div className="chat-header-text">チャット</div> 
      </header>
    

      <main className="chat-main">
        <div className="chat-main-width">
          <div className="chat-subtitle-wrap">
            <img src={matchedAlienGradation}></img>
            <div className="chat-subtitle-text">遭遇前チャット</div>
          </div>

          <div className="join-card-wrap">
            <img src={serialUnknownUser}></img>
            <div className="join-card-text">参加する</div>
          </div>

          <div className="chat-subtitle-wrap">
            <img src={chatRocketGradation}></img>
            <div className="chat-subtitle-text">参加連絡</div>
          </div>

          <div className="join-announce-card-wrap">
            <img src={unknownUser}></img>
            <div className="join-announce-card-text">昼ご飯たべいこ―</div>
          </div>

          <div className="chat-subtitle-wrap">
            <img src={chatMessageGradation}></img>
            <div className="chat-subtitle-text">ダイレクトメッセージ</div>
          </div>
          <DMCard name="hoge田 hoge男" message="この前はありがとう、それで..." />
          <DMCard name="あいき" message="まだまだ精進が必要ですね" />
          <DMCard name="かつじ" message="たくさんデザイン作った！" />
          <DMCard name="ゆー"   message="開発とマネジメント大変だ、ありがとう" />
        </div>
      </main>
    </div>
  );
};

const DMCard = ({ name, message }) => {
  return(
    <div className="DMCard-wrap"> 
      <img className="DMCard-user" src={unknownUser}></img>
      <div className="middle-wrap">
        <div className="middle-name-text">{name}</div>
        <div className="middle-message-text">{message}</div>
      </div>
      <img className="DMCard-arrow" src={arrowRight}></img>
    </div>
  ); 
};
