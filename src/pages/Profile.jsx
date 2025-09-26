import React, { useState, useEffect } from 'react';
import { Camera, Edit, X, FileText, ExternalLink } from 'lucide-react';

export default function Profile() {
  // Mock login state - in real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to false to see login state
  const [isEditing, setIsEditing] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [showResumeViewer, setShowResumeViewer] = useState(false);
  const [attendeeData, setAttendeeData] = useState({
    firstName: 'Sarah',
    lastName: 'Rodriguez',
    email: 'sarah.rodriguez@fiu.edu',
    school: 'Florida International University',
    fieldOfStudy: 'Computer Science',
    levelOfStudy: 'Undergraduate',
    yearLevel: 'Junior',
    resume: 'sarah_rodriguez_resume.pdf',
    linkedin: 'https://linkedin.com/in/sarah-rodriguez',
    github: 'https://github.com/srodriguez',
    shirtSize: 'M'
  });
  const [editData, setEditData] = useState({...attendeeData});

  // Mock function to simulate fetching user data
  useEffect(() => {
    if (isLoggedIn) {
      // In real app, fetch user data from API
      console.log('Fetching user profile data...');
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    // Mock login - in real app would handle authentication
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({...attendeeData});
  };

  const handleSave = async () => {
    // Mock save - in real app would send to API
    setAttendeeData({...editData});
    setIsEditing(false);
    console.log('Profile updated:', editData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({...attendeeData});
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleResumeUpdate = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Mock resume upload - in real app would upload to server
      const fileName = file.name;
      setAttendeeData(prev => ({
        ...prev,
        resume: fileName
      }));
      console.log('Resume updated:', fileName);
    }
  };

  const handleCheckIn = () => {
    setShowQRScanner(true);
  };

  const handleQRScan = () => {
    // Mock QR scan success
    setShowQRScanner(false);
    alert('Check-in successful! Welcome to WiTCON 2025!');
  };

  // Login/Not Logged In State
  if (!isLoggedIn) {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <div className="bg-white border rounded p-6 text-center space-y-4">
          <p>Please log in to view your attendee profile.</p>
          <div className="space-y-3">
            <div>
              <label className="block text-left">Email</label>
              <input 
                type="email" 
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-left">Password</label>
              <input 
                type="password" 
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your password"
              />
            </div>
            <button 
              onClick={handleLogin}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Login
            </button>
          </div>
          <div className="text-sm space-x-4">
            <a href="#" className="underline">Forgot Password?</a>
            <a href="/register" className="underline">Create Account</a>
          </div>
        </div>
      </section>
    );
  }

  // Logged In State
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Attendee Profile</h2>
        <button 
          onClick={handleLogout}
          className="text-sm text-gray-600 hover:text-gray-800 underline"
        >
          Logout
        </button>
      </div>

      {/* Important Links */}
      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold mb-3">Important Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <a 
            href="https://www.notion.so/WiTCON-2026-Attendee-Guide" 
            className="flex items-center gap-2 underline font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            WiTCON '26 Attendee Guide
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 underline font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Report an Incident
          </a>
          <a 
            href="https://linktr.ee/wicsfiu" 
            className="flex items-center gap-2 underline font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            WiCS Social Media + Discord
          </a>
        </div>
      </div>

      {/* Check-In Section */}
      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold mb-3">Event Check-In</h3>
        <button 
          onClick={handleCheckIn}
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          <Camera className="w-4 h-4" />
          Check In to WiTCON
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Use this to check in when you arrive at the conference
        </p>
      </div>

      {/* Profile Information */}
      <div className="bg-white border rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Profile Information</h3>
          {!isEditing ? (
            <button 
              onClick={handleEdit}
              className="flex items-center gap-2 underline"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          ) : (
            <div className="space-x-2">
              <button 
                onClick={handleSave}
                className="bg-gray-800 text-white px-3 py-1 text-sm rounded hover:bg-gray-900"
              >
                Save
              </button>
              <button 
                onClick={handleCancel}
                className="border px-3 py-1 text-sm rounded hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-sm">First Name</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <p className="py-2">{attendeeData.firstName}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">Last Name</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <p className="py-2">{attendeeData.lastName}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={editData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <p className="py-2">{attendeeData.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">School</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.school}
                onChange={(e) => handleInputChange('school', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <p className="py-2">{attendeeData.school}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">Field of Study</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.fieldOfStudy}
                onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <p className="py-2">{attendeeData.fieldOfStudy}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">Level of Study</label>
            {isEditing ? (
              <select
                value={editData.levelOfStudy}
                onChange={(e) => handleInputChange('levelOfStudy', e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Post-Doctorate">Post-Doctorate</option>
              </select>
            ) : (
              <p className="py-2">{attendeeData.levelOfStudy} {attendeeData.yearLevel && `- ${attendeeData.yearLevel}`}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">LinkedIn</label>
            {isEditing ? (
              <input
                type="url"
                value={editData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <p className="py-2">
                {attendeeData.linkedin ? (
                  <a href={attendeeData.linkedin} className="underline" target="_blank" rel="noopener noreferrer">
                    View LinkedIn
                  </a>
                ) : (
                  'Not provided'
                )}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium text-sm">GitHub</label>
            {isEditing ? (
              <input
                type="url"
                value={editData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <p className="py-2">
                {attendeeData.github ? (
                  <a href={attendeeData.github} className="underline" target="_blank" rel="noopener noreferrer">
                    View GitHub
                  </a>
                ) : (
                  'Not provided'
                )}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold mb-4">Resume</h3>
        
        {attendeeData.resume ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-gray-600" />
              <div>
                <p className="font-medium">{attendeeData.resume}</p>
                <p className="text-sm text-gray-600">Current resume on file</p>
              </div>
            </div>
            <div className="space-x-2">
              <button 
                onClick={() => setShowResumeViewer(true)}
                className="underline text-sm"
              >
                View Resume
              </button>
              <label className="bg-gray-800 text-white px-3 py-1 text-sm rounded hover:bg-gray-900 cursor-pointer">
                Update Resume
                <input
                  type="file"
                  onChange={handleResumeUpdate}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 mb-3">No resume uploaded</p>
            <label className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 cursor-pointer">
              Upload Resume
              <input
                type="file"
                onChange={handleResumeUpdate}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
            </label>
          </div>
        )}
      </div>

      {/* QR Scanner Modal */}
      {showQRScanner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Scan QR Code</h3>
              <button 
                onClick={() => setShowQRScanner(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-center space-y-4">
              {/* Mock camera view */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Camera view would appear here</p>
                  <p className="text-sm text-gray-500">Point your camera at the QR code</p>
                </div>
              </div>
              
              {/* Mock scan button for demo */}
              <button 
                onClick={handleQRScan}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                Simulate QR Scan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Viewer Modal */}
      {showResumeViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 h-5/6">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">{attendeeData.resume}</h3>
              <button 
                onClick={() => setShowResumeViewer(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 h-full">
              {/* Mock resume viewer */}
              <div className="border rounded h-full flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <FileText className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Resume preview would appear here</p>
                  <p className="text-sm text-gray-500">PDF viewer or document preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}