function EducationForm(props) {
  return (
    <>
      <form className="education-form" onSubmit={props.onSubmit}>
        <h2>Add education:</h2>
        <div className="form-field-vertical">
          <label htmlFor="place">Place of Study: </label>
          <input
            type="text"
            id="place"
            placeholder="Georgia Tech"
            name="place"
            value={props.education.place}
            onChange={props.onChange}
          />
        </div>
        <div className="form-field-vertical">
          <label htmlFor="study">Field of Study: </label>
          <input
            type="text"
            id="study"
            placeholder="Computer Science"
            name="study"
            value={props.education.study}
            onChange={props.onChange}
          />
        </div>
        <div className="form-field-vertical">
          <label htmlFor="year">Year of Completion: </label>
          <input
            type="number"
            id="year"
            placeholder={new Date().getFullYear()}
            name="year"
            pattern="[0-9]{4}"
            value={props.education.year}
            onChange={props.onChange}
          />
        </div>
        <button type="submit">Add education</button>
      </form>
    </>
  );
}

export default EducationForm;
