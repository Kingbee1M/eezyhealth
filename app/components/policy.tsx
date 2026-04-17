import { policyData } from "@/policy"

export default function Policy() {
    return (
        <section className="w-9/10 flex flex-col gap-5 mb-8 px-6 md:px-16">
            <h2 className="text-text2">Introduction</h2>
            <p className="text-xl text-text leading-7.5">At Eezyhealth, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our app, web platform, and services. </p>
            <p className="text-xl text-text leading-7.5">We believe that trust is earned through transparency. This policy is written in plain language to help you understand exactly how your information is handled, stored, and protected within the Eezyhealth ecosystem.</p>
        
            <div className="flex flex-col gap-2">
                {policyData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <h3 className="text-text2 text-2xl font-bold">{item.title}</h3>
                            <hr className="border-[#44CE2D] border w-10"/>
                        </div>
                        <p className="lg:text-xl lg:leading-7.5 text-headers">{item.desc}</p>
                        <ul className="flex flex-col gap-2">
                            {item.mainUL.map((subItem, subIndex) => (
                                <li key={subIndex} className="text-text flex flex-col gap-2 text-20 leading-7">
                                    {subItem.title && <h4 className="text-text">{subItem.title}</h4>}
                                    <ul className="list-disc list-inside pl-2 flex flex-col gap-2">
                                        {subItem.list.map((listItem, listIndex) => (
                                            <li key={listIndex} className="text-text">{listItem}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}