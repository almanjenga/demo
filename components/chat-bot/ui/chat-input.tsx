import CustomButton from "../../CustomButton";



export default function ChatInput(){
    const handleSend =()=>{

    }
    return (
        
        <div className="flex space-x-10 items-center mt-auto">
            <form className="flex items-center justify-center w-full space-x-2">
                <input type = 'text'
                placeholder="Add the details here"
                className="flex h-10 w-full rounded-md border border-width:2px border-blue-500 px-3 text-sm text-black"/>
                <CustomButton
                title="Send"
                handleClick={handleSend}
                containerStyles="p-2 bg-blue-600 text-white inline-flex items-center justify-center rounded-md text-sm font-large px-4 py-2"/>
            </form>
        </div>
    )
}
