function Exercises02() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-5">
          Contact Information
        </h2>

        <div className="flex justify-center mb-5">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=900"
            alt="Contact Image"
            className="w-32 h-32 rounded-full object-cover border-2 border-emerald-700 shadow-emerald-200"
          />
        </div>

        <div className="space-y-3 text-gray-700">
          <p className="bg-gray-100 p-3 rounded-lg">Name: Nadine</p>

          <p className="bg-gray-100 p-3 rounded-lg">
            Email: nadine@example.com
          </p>

          <ul className="space-y-3">
            <li className="bg-gray-100 p-3 rounded-lg">Phone:+250788809451</li>

            <li className="bg-gray-100 p-3 rounded-lg">
              Address: Kigali , Rwanda
            </li>
          </ul>
        </div>

        <input
          type="text"
          placeholder="Enter your message"
          className="w-full mt-5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </div>
    </div>
  );
}

export default Exercises02;
