import React, { useState } from 'react';

export default function Register() {
    // State for form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [resumeFile, setResumeFile] = useState(null);

    // Handle file change (for resume file)
    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    // Form submit handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare FormData for sending to the API
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('school', school);
        if (resumeFile) formData.append('resume', resumeFile);

        // Send the form data to the backend API
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/attendees/`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Attendee created:', data);
                // Handle success (e.g., show a success message or redirect)
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">Registration</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name Field */}
                <div>
                    <label htmlFor="first_name" className="block">First Name</label>
                    <input
                        id="first_name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="input"
                        required
                    />
                </div>

                {/* Last Name Field */}
                <div>
                    <label htmlFor="last_name" className="block">Last Name</label>
                    <input
                        id="last_name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="input"
                        required
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                    />
                </div>

                {/* School Field */}
                <div>
                    <label htmlFor="school" className="block">School</label>
                    <input
                        id="school"
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        className="input"
                    />
                </div>

                {/* Resume Upload Field */}
                <div>
                    <label htmlFor="resume" className="block">Resume</label>
                    <input
                        id="resume"
                        type="file"
                        onChange={handleFileChange}
                        className="input"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit" className="btn-primary">Register</button>
                </div>
            </form>
        </section>
    );
}


// export default function Register() {
//   return (
//     <section className="space-y-4">
//       <h2 className="text-2xl font-bold">Registration</h2>
//       <p>Placeholder for registration form.</p>
//     </section>
//   );
// }

