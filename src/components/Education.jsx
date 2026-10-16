import { useState } from "react";
import FormWrapper from "./ui/FormWrapper";
import Input from "./ui/Input";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [value, setValue] = useState({
    id: crypto.randomUUID(),
    schoolName: "",
    address: "",
    degree: "",
    startDate: "",
    endDate: "",
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
      schoolName: "",
      address: "",
      degree: "",
      startDate: "",
      endDate: "",
    }));
    setEducation((prevValue) => [...prevValue, value]);
  };
  return (
    <section>
      <h2>Education</h2>
      <div className="card-parent education-container">
        {(!showForm && education.length > 0) ? education.map((edu) => (
          <div className="card" key={edu.id}>
            <h3>{edu.schoolName}</h3>
            <p>{edu.address}</p>
            <p>{edu.degree}</p>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        )): <p className="no-data">No education data at the moment</p>}
      </div>

      {showForm && <FormWrapper
        onSubmit={handleFormSubmission}
        onHideForm={() => setShowForm(false)}
      >
        <Input
          type="text"
          value={value.schoolName}
          onChange={handleChange}
          title="schoolName"
          label="School name"
        />
        <Input
          type="text"
          value={value.address}
          onChange={handleChange}
          title="address"
          label="School address"
        />
        <Input
          type="text"
          value={value.degree}
          onChange={handleChange}
          title="degree"
          label="Degree obtained"
        />
        <Input
          type="date"
          value={value.startDate}
          onChange={handleChange}
          title="startDate"
          label="Admission date"
        />
        <Input
          type="date"
          value={value.endDate}
          onChange={handleChange}
          title="endDate"
          label="Graduation date"
        />
      </FormWrapper>}
    </section>
  );
};

export default Education;
