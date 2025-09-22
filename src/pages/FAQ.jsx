export default function FAQ() {
  const faqs = [
    {
      question: "Who can attend?",
      answer: "The conference is free and open to all students interested in technology, networking, and empowerment, with a focus on celebrating and supporting women in the tech field."
    },
    {
      question: "When and where will the event be held?",
      answer: (
        <div>
          <p className="mb-2"><strong>When:</strong> March 27th, 2026, from 9AM to 7PM</p>
          <p className="mb-2"><strong>Where:</strong> Graham Center Ballrooms</p>
          <p className="mb-1">10955 SW 15th St</p>
          <p className="mb-1">Miami, FL 33199</p>
          <p>FIU Modesto Maidique Campus</p>
        </div>
      )
    },
    {
      question: "Where do I park?",
      answer: (
        <div>
          <p className="mb-3">Not an FIU Student? Email us to register for parking at <a href="mailto:wics@fiu.edu" className="text-blue-600 underline">wics@fiu.edu</a></p>
          
          <div className="mb-3">
            <p className="font-medium">Blue Parking Garage</p>
            <p>10880 SW 16 ST, Miami, FL 33174</p>
          </div>
          
          <div className="mb-3">
            <p className="font-medium">Gold Parking Garage</p>
            <p>10720 SW 16 ST, Miami, FL 33165</p>
          </div>
          
          <p className="text-sm text-gray-600">
            <strong>Disclaimer:</strong> You will need to register for free parking before arriving to FIU. 
            Parking registrations after the event will not be accepted. WiCS FIU is not responsible for 
            parking reimbursement outside of the following allowed garages.
          </p>
        </div>
      )
    },
    {
      question: "Where can I update my resume?",
      answer: "You can update your resume through your profile on our site! Head over to the Profile tab once you're logged in, then follow the instructions provided."
    },
    {
      question: "Do I need experience to participate?",
      answer: "Not at all! You do not have to have any experience in technology or be a tech major to attend and enjoy WiTCON. WiTCON will have engaging workshops and empowering panels that will be beneficial for all future professionals interested in learning!"
    },
    {
      question: "Do I have to stay at the event the entire time?",
      answer: "You are free to attend the parts of the event that most interest you. But make sure to arrive by 1 PM to secure your spot! After 1 pm, we will open up to attendees on the waitlist and we cannot guarantee you entrance."
    },
    {
      question: "What do I need to bring to the conference?",
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>FIU ID / Official Identification</li>
          <li>Note-taking Materials</li>
          <li>Resume/Business Cards</li>
          <li>Charged Electronic Devices</li>
          <li>Business Casual Attire and Comfortable Footwear</li>
          <li>A Positive Attitude!</li>
        </ul>
      )
    },
    {
      question: "Who is organizing WiTCON26?",
      answer: "WiTCON 2026 is organized by Women in Computer Science from Florida International University."
    },
    {
      question: "How can I stay updated about WiTCON?",
      answer: (
        <div>
          <p className="mb-2">For the latest updates, keep an eye on your email after registering, and follow our social media!</p>
          <a href="https://linktr.ee/wicsfiu" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            https://linktr.ee/wicsfiu
          </a>
        </div>
      )
    }
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      
      {/* Important Links */}
      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold mb-3">Important Links</h3>
        <div className="space-y-2 text-sm">
          <div>
            <a href="#" className="text-blue-600 underline">
              WiTCON '26 Attendee Guide (Notion)
            </a>
          </div>
          <div>
            <a href="#" className="text-blue-600 underline">
              Report an Incident Form
            </a>
          </div>
          <div>
            <a href="https://linktr.ee/wicsfiu" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              WiCS Social Media + Discord
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border rounded p-4">
            <h3 className="font-semibold mb-3">{faq.question}</h3>
            <div className="text-gray-700">
              {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}