'use client'

export default function AboutHeader() {
    const handleClick =()=> {
        window.location.href = '/contact-us'
    }
    
    return (
        <header className="relative md:px-16 overflow-clip about-body">
            <div className="absolute top-0 left-0 z-10 w-screen lg:w-475 h-182.5 bg-[#00000062]"/>

                <div className="w-full flex-col flex items-start gap-6 px-16 z-20 py-5">
                    <h2 className="text-primary-green! text-lg">About Us</h2>
                    <h1 className=" text-3xl md:text-4xl text-white w-full md:w-1/3">Healthcare, <span className="text-primary-green text-3xl md:text-4xl">finally</span> <br/> made simple.</h1>
                    <p className="w-[90%] lg:w-[55%] text-left text-xs md:text-sm text-white leading-6.5">We build the connective tissue between patients, providers, and healthcare systems — so that getting care feels less like navigating a labyrinth and more like talking to someone who actually knows you.</p>
                    <button className="bg-primary-green text-white mt-4 rounded-sm p-2 cursor-pointer font-dmSans" onClick={handleClick}>Contact Us</button>
                </div>
        </header>
    )
}