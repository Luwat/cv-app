import { useState } from "react";

const GeneralInformation = () => {
  const [generalInformation, setGeneralInformation] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setValue((prevValue) => ({
      ...prevValue,
      name: "",
      email: "",
      phone: "",
      address: "",
    }));
    setGeneralInformation((prevValue) => ({
      ...prevValue,
      name: value.name,
      email: value.email,
      phone: value.phone,
      address: value.address,
    }));
    console.log(generalInformation);
    setShowForm(false);
  };
  return (
    <section>
      <h2>General Information</h2>
      <button onClick={() => setShowForm(true)}>Add general information</button>
      {!showForm && (
        <div>
          <div>
            <b>Name: </b>
            {generalInformation.name}
          </div>
          <div>
            <b>Email: </b>
            {generalInformation.email}
          </div>
          <div>
            <b>Phone number: </b>
            {generalInformation.phone}
          </div>
          <div>
            <b>Address: </b>
            {generalInformation.address}
          </div>
        </div>
      )}
      {showForm && (
        <form method="get" onSubmit={handleFormSubmission}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={value.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={value.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={value.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={value.address}
              onChange={handleChange}
              autoComplete="address"
            />
          </div>
          <button onClick={() => setShowForm(false)}>Cancel</button>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default GeneralInformation;
