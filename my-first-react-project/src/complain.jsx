function Complain() {
    const [formData, setFormData] = useState({
        name: "",
        complaint: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send formData to an API or log it to the console
        console.log("Complaint Submitted:", formData);
        // Optionally reset form
        setFormData({ name: "", complaint: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="p-10 text-center">
            <h2 className="text-3xl font-bold">Register Your Complaint</h2>
            <p className="mt-4 text-lg">Submit your complaints regarding water leakages.</p>

            {/* Complaint Form */}
            <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <label className="block mb-2 font-semibold text-left">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mb-4"
                    placeholder="Your Name"
                    required
                />

                <label className="block mb-2 font-semibold text-left">Complaint:</label>
                <textarea
                    name="complaint"
                    value={formData.complaint}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg mb-4"
                    placeholder="Describe the issue"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all"
                >
                    Submit Complaint
                </button>
            </form>
        </div>
    );
}

export default Complain;
