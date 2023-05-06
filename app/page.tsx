"use client"
import useState  from 'react-usestateref';
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import { MessageProps,Creator } from './interfaces/MessageProps';
import { useEffect } from 'react';

const url = '/api/genie'

export default function Home() {
  const [messages, setMessages, messageRef] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);
  // const messageRef = useRef<MessageProps[]>([]);
  // const loadingRef = useRef<boolean>(false);

  // useEffect(() => {
  //   const inititalPrompt = ;
  // })



  const callApi = async (input: string) => {
    setLoading(true);
    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime()
    };
    

    setMessages([...messageRef.current, myMessage]);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input
    })
  }).then((response) => response.json());
  setLoading(false);

  if (response.text) {
    const botMessage: MessageProps = {
      text: response.text,
      from: Creator.Bot,
      key: new Date().getTime()
    };
    setMessages([...messageRef.current, botMessage]);
  } else {
    alert('Something went wrong');
  };
};

  return (
    <main className="relative max-w-2xl mx-auto">
      <div className='sticky top-0 w-fll pt-10 px-4'>
      <ChatInput onSend={(input) => callApi(input)} disabled={loading}/>
      </div>
      
      <div className='mt-10 px-4'>
        {messages.map((msg: MessageProps) => (
          <ChatMessage key={msg.key} text={msg.text} from={msg.from}/>
        ))}
        {messages.length === 0 && <p className='text-center text-gray-400'>I am at youre service</p>}
      </div>
    </main>
  );
  };

