const Input = ({ title, label, value, onChange, ...more }) => {
  return (
    <div className="form-group">
      <label htmlFor={title}>{label}: </label>
      <input
        {...more}
        name={title}
        id={title}
        value={value}
        onChange={onChange}
        autoComplete={title}
      />
    </div>
  );
};

export default Input;
