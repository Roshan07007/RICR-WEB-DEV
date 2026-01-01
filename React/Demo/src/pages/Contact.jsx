import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white w-full max-w-md shadow-lg rounded-2xl p-6 border">
          <h1 className="text-2xl font-bold text-center mb-5 text-blue-600">
            Registration Form
          </h1>

          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left font-semibold">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="w-full border p-2 mt-1 rounded-lg focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full border p-2 mt-1 rounded-lg focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold">Phone</label>
              <input
                type="number"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone"
                className="w-full border p-2 mt-1 rounded-lg focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold">
                Confirm Password
              </label>
              <input
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full border p-2 mt-1 rounded-lg focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="skill booot"> skill</label>
              <input type="checkbox" name="checkbox" value="css" /> css
              <input type="checkbox" />
            </div>

            <div className="flex justify-between mt-5">
              <button
                type="reset"
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Clear
              </button>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
