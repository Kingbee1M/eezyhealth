'use client'

export default function AboutHeader() {
    const handleClick =()=> {
        window.location.href = '/contact-us'
    }
    
    return (
        <header className=" w-full py-16 relative">
            <div className="absolute top-0 left-0 -z-10 w-screen lg:w-475 h-182.5 bg-[#00000062]"/>

                <div className="w-full flex-col flex items-start gap-6 px-16">
                    <h2 className="text-primary-green! text-lg">About Us</h2>
                    <h1 className="text-xl lg:text-3xl xl:text-5xl text-white w-1/3">Healthcare, <span className="text-primary-green">finally</span> <br/> made simple.</h1>
                    <p className="w-[90%] lg:w-[55%] text-left text-base lg:text-lg text-white leading-6.5">We build the connective tissue between patients, providers, and healthcare systems — so that getting care feels less like navigating a labyrinth and more like talking to someone who actually knows you.</p>
                    <button className="bg-primary-green text-white mt-4 rounded-sm p-2 cursor-pointer font-dmSans" onClick={handleClick}>Contact Us</button>
                </div>
        </header>
    )
}