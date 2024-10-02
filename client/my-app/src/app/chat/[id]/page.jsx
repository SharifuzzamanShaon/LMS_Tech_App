'use client'
import { useRouter } from 'next/navigation';

const ChatPage = ({params}) => {
  const {res} = params; // Access the dynamic segment (id)
console.log(res);

  return (
    <div className="m-4">
      <div className="flex flex-1 justify-between shadow-md p-2">
        <div className="ug-header dark:bg-slate-900">
          <p className="text-slate-800 dark:text-white">Your chat area</p>
        </div>
        <></>
      </div>
    </div>
  );
};

export default ChatPage;
