const FormWrapper = ({ children, onSubmit, onHideForm }) => {
  return (
    <form method="get" onSubmit={onSubmit}>
      {children}
      <div className="buttons-control">
        <button onClick={onHideForm}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormWrapper;
