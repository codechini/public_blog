// import axios from "axios";
import { useState } from "react";

const CreatePost = () => {

  //Apparantly for some reason the submission didin't work for localhost
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Form submitted successfully!');
        console.log('Response:', result);
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };
  return (
    <>
      <main className="responsive">

        <form onSubmit={handleSubmit}>
          <div className="field border label">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required />
            <label>Title</label>
          </div>
          <div className="field border label">
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required />

            <label>Content</label>
          </div>
          <div className="field border label">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="world">World</option>
              <option value="us">U.S</option>
              <option value="technology">Technology</option>
              <option value="design">design</option>
              <option value="World">Item 2</option>
              <option value="World">Item 3</option>
              <option value="World">Item 1</option>
              <option value="World">Item 2</option>
              <option value="World">Item 3</option>
            </select>
            <label>Select</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}

export default CreatePost