// 'use-client'

// const Chat = () => {

//   const [messages, setMessages, messageRef] = useState<MessageProps[]>([]);
//   const [loading, setLoading, loadingRef] = useState(false);

//   // Call the API and handle the messages
//   const callApi = async (input: string) => {
//     // ...
//   };

//   return (
//     <>
//       <div className="sticky top-0 w-fll pt-10 px-4">
//         <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
//       </div>
//       {/* Render the chat messages here */}
//     </>
//   );
// };