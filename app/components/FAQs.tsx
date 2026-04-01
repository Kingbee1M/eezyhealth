import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQs() {
    const faqs = [
        { question: "How do I book an appointment?", answer: "Simply download the app, create a profile, choose a doctor, and select a convenient time for a video or voice consultation." },
        { question: "When are doctors available?", answer: <>Doctors are available 24/7, 365 days a year. You can book an immediate &quot;on-demand&quot; consultation to see the next available provider within minutes, or schedule a specific time that fits your calendar through the app&apos;s booking system.</> },
        { question: "Can I choose my doctor?", answer: "Yes. When scheduling a future appointment, you can browse through provider profiles to view their specialties, years of experience, languages spoken, and patient ratings." },
        { question: "Can doctors prescribe medication?", answer: "Yes. If the doctor determines that medication is clinically necessary." },
        { question: "Is my information secure and private?", answer: "Yes. All patient data is protected using industry-standard encryption and secure servers. Our platform is fully compliant with healthcare privacy regulations (such as HIPAA), ensuring that your medical records, video calls, and messages remain strictly confidential and accessible only to you and your healthcare provider." },
        { question: "What types of health concerns can I use TeleHealth for?", answer: "You can use the app for a wide range of non-emergency medical concerns, including: Common Illnesses, Skin Conditions, Mental Health, Routine Care, Chronic Management" },
    ]
    return(
        <section id="faqs" className="w-full py-20 flex flex-col items-center gap-16">
            <h2>Frequently asked questions</h2>

            <div className="w-4/5 lg:w-3/5 flex flex-col items-center lg:items-start font-georgia">
                {faqs.map((faq, index)=> (
                <Accordion key={index} type="single" collapsible defaultValue={`item-${index + 1}`}>
                <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                    {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
                ))}
            </div>
        </section>
    )
}