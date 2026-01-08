function CV(props) {
  return (
    <div className="cv">
      <div className="cv-header">
        {props.hasName && (
          <>
            <h1>{props.identity.name}</h1>
            <hr />
          </>
        )}
        <div className="cv-phone-email">
          {props.hasPhone && <span>P: {props.identity.phone}</span>}
          {props.hasEmail && <span>E: {props.identity.email}</span>}
        </div>
      </div>

      {props.education.length > 0 && (
        <div className="cv-education">
          <h2>Education </h2>
          <ul>
            {props.education.map((school) => (
              <li key={school.id}>
                <div>
                  <span className="school">{school.place}</span>
                  <span className="year">{school.year}</span>
                </div>
                <span className="study">{school.study}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {props.work.length > 0 && (
        <div className="cv-work">
          <h2>Experience </h2>
          <ul>
            {props.work.map((job) => (
              <li key={job.id}>
                <div>
                  <span className="position">{job.position}</span>
                  <span className="year">
                    {job.startYear}-{job.endYear}
                  </span>
                </div>
                <span className="company">{job.company}</span>
                <span className="description">{job.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CV;
