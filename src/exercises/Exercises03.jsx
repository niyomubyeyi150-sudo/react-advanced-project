function Exercises03() {
  function submitForm() {
    alert("Form submited successfully ");
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
          Contact Form
        </h2>

        <label
          htmlFor="Email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email:
        </label>

        <input
          type="text"
          id="Email"
          placeholder="enter your email"
          required
          tabIndex={1}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password:
        </label>

        <input
          type="text"
          id="password"
          placeholder="enter your password"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <button
          type="button"
          onClick={submitForm}
          className="w-full mt-5 bg-green-800 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Exercises03;
