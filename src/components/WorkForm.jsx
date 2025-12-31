function WorkForm(props) {
  return (
    <>
      <form className="work-form" onSubmit={props.onSubmit}>
        <h2>Add work experience:</h2>
        <div className="form-field-vertical">
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            id="company"
            placeholder="Microsoft"
            name="company"
            value={props.work.company}
            onChange={props.onChange}
          />
        </div>
        <div className="form-field-vertical">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            id="position"
            placeholder="Junior Developer"
            name="position"
            value={props.work.position}
            onChange={props.onChange}
          />
        </div>
        <div className="form-field-vertical">
          <label htmlFor="description">Description of duties: </label>
          <textarea
            id="description"
            name="description"
            placeholder="Developed web apps using React and collaborated with teams..."
            value={props.work.description}
            onChange={props.onChange}
          ></textarea>
        </div>
        <div className="start-year-end-year">
          <div className="form-field-vertical">
            <label htmlFor="startYear">Start year: </label>
            <input
              type="number"
              id="startYear"
              placeholder={new Date().getFullYear()}
              name="startYear"
              value={props.work.startYear}
              onChange={props.onChange}
            />
          </div>
          <div className="form-field-vertical">
            <label htmlFor="endYear">End year: </label>
            <input
              type="number"
              id="endYear"
              placeholder={new Date().getFullYear()}
              name="endYear"
              value={props.work.endYear}
              onChange={props.onChange}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default WorkForm;
