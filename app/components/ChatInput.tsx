
import { InputProps } from "../interfaces/InputProps";
import useState  from 'react-usestateref';

export const ChatInput = ({ onSend, disabled}: InputProps) => {
    const [input, setInput] = useState('');
  
    const sendInput = () => {
      onSend(input);
      setInput('');
    }
  
    // const handleInputPlaceHolder = () => {
    //   if(isFirstMessage) return 'Please state the reason for youre visit at the clinic'
    //   return 'Enter Answer'
    // }
  
    const handleKeyDown = (e: any) => {
      if(e.keyCode === 13) {
        sendInput();
      };
    };
  
      return (
        <div className="bg-white border-2 p-2 rounded-lg flex justify-center">
          <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className='w-full py-2 px-3 text-gray-800 rounded-lg focus:outline-none'
          type='text'
          placeholder={"enter text"}
          disabled={disabled}
          onKeyDown={(e) => handleKeyDown(e)}
          />
          {
            disabled && (
              <svg
              aria-hidden="true"
              className='mt-1 w-8 h-8 mr-2 text-gray-200 animated-spin'
              >
              </svg>
              
            )
          }
          {
            !disabled && (
              <button
              onClick={sendInput}
              className='bg-blue-500 text-white px-4 py-2 rounded-lg'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>

              </button>
            )}
        </div>
      );
  };