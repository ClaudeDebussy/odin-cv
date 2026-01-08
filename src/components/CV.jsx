function CV(props) {
  return (
    <div className="cv">
      {props.hasName && (
        <>
          <h1>{props.identity.name}</h1>
          <hr />
        </>
      )}
      <div className="cv-header">
        {props.hasPhone && <span>P: {props.identity.phone}</span>}
        {props.hasEmail && <span>E: {props.identity.email}</span>}
      </div>

      {props.education.length > 0 && (
        <>
          <h2>Education: </h2>
          <ul>
            {props.education.map((school) => (
              <li key={school.id}>
                <span className="school">{school.place}</span>
                <span className="study">{school.study}</span>
                <span className="year">{school.year}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {props.work.length > 0 && (
        <>
          <h2>Experience: </h2>
          <ul>
            {props.work.map((job) => (
              <li key={job.id}>
                <div className="job-left-column">
                  <span className="job-start-year">{job.startYear}</span>
                  <span className="job-end-year">{job.endYear}</span>
                </div>
                <div className="job-right-column">
                  <span className="position">{job.position}</span>
                  <span className="company">{job.company}</span>
                  <span className="description">{job.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CV;
