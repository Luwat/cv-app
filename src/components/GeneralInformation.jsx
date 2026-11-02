import { useState } from "react";
import FormWrapper from "./ui/FormWrapper";
import Input from "./ui/Input";
import FormDisplayButton from "./ui/FormDisplayButton";

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
      <FormDisplayButton
        title={"Add general information"}
        onDisplayForm={() => setShowForm(true)}
      />
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
        <FormWrapper
          onSubmit={handleFormSubmission}
          onHideForm={() => setShowForm(false)}
        >
          <Input
            type="text"
            label="Name"
            title="name"
            onChange={handleChange}
            value={value.name}
          />
          <Input
            type="email"
            label="Email"
            title="email"
            onChange={handleChange}
            value={value.email}
          />
          <Input
            type="tel"
            label="Telephone number"
            title="phone"
            onChange={handleChange}
            value={value.phone}
          />
          <Input
            type="text"
            label="Address"
            title="address"
            onChange={handleChange}
            value={value.address}
          />
        </FormWrapper>
      )}
    </section>
  );
};

export default GeneralInformation;
