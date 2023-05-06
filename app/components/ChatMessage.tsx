import Image from "next/image";
// import userImg from '/user-img.png'
// import botImg from '/bot-img.jpg'
const userImg = '/user-img.jpg';
const botImg = '/bot-img.png';
import { MessageProps,Creator } from "../interfaces/MessageProps";


export const ChatMessage = ({ text, from }: MessageProps) => {
    return(
    <>
      {
        from == Creator.Me && (
          <div className="bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
            <Image height={40} src={userImg} alt="User" width={40} />
            <p className="text-gray-700">{text}</p>
          </div>
        )}
      {
        from == Creator.Bot && (
          <div className="bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
            <Image height={40} src={botImg} alt="User" width={40} />
            <p className="text-gray-700">{text}</p>
          </div>
        )}
    </>
    )
  }