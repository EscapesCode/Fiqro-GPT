"use client"
import React from 'react'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'
import { useChat,Message } from "ai/react"
import { FaClipboardList } from "react-icons/fa";
export default function ChatComponents() {
	const {input,handleInputChange,handleSubmit,isLoading,messages} = useChat();
	console.log(messages);
	console.log(input);
	const router = useRouter()
	
  return (
	  <div className='mt-5 '>
		{messages.map((message)=>{

			// Untuk mencopy text
			const copyToClipboard = (text: string) => {

				const el = document.createElement('textarea');
				
				el.value = text;
				
				document.body.appendChild(el);
				
				el.select();
				
				document.execCommand('copy');
				
				document.body.removeChild(el);
				
				alert('Jawaban Telah Disalin Ke Clipboard!')
				}

			return (
				// <div className='bg-yellow-400 p-1 max-h-96'>
				<div className='' key={message.id}>
					{
						message.role === "assistant"?
						<div className='flex justify-between '>
						<h3 className='text-lg font-semibold mt-2 '>FIQRO GAPTECH-3.5 TURBO</h3>
						<button className="mr-5" onClick={() => copyToClipboard(message.content)}><FaClipboardList className='h-7 '/></button>
						</div>
						:
						<h3 className="text-lg font-semibold mt-2 ">PERTANYAAN KELEN</h3>
					}
					
						{
							message.content.split("\n").map((currentTextBlocks:string,index : number)=>
							{
								if (currentTextBlocks === "") {
									return <p className='mt-5' key={message.id + index}>&nbsp;</p>
								}else{
									return <p className="text-justify" key={message.id + index }>{currentTextBlocks}</p>
								}
							}
							)
						}
						{/* Tombol Salin */}
					<div className='flex justify-end m-0'>
					</div>
					
				</div>
				// </div>
			)
		})}


		  <div>
			  <form action="" className='mt-12 ' onSubmit={handleSubmit}>
				  <label className="sr-only">Silahkan Tulis  Pertanyaan Anda </label>
				  <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
					  <input autoFocus type="text" id="chat" className="block mx-4 p-2.5 w-full  text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md" placeholder="Silahkan Tulis Pertanyaan Anda "
						  value={input}
						  onChange={handleInputChange}
					  ></input>
					  <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
						  <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
							  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
						  </svg>
						  <span className="sr-only">Send message</span>
					  </button>
				  </div>
			  </form>
		  </div>
	</div>
  )
}





// }
