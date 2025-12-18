export default function Form(props) {
  return (
    <>
      <label>
        Name:{""}
        <input
          type="text"
          value={props.name}
          onChange={props.person.handleName}
        />
      </label>
      <label>
        Email:{""}
        <input
          type="text"
          value={props.email}
          onChange={props.person.handleEmail}
        />
      </label>
      <label>
        Phone:{""}
        <input
          type="text"
          value={props.phone}
          onChange={props.person.handlePhone}
        />
      </label>
      <Education
        school={props.person.school}
        study={props.person.study}
        dateOfStudy={props.person.dateOfStudy}
        handleSchool={props.person.handleSchool}
        handleStudy={props.person.handleStudy}
        handleDateOfStudy={props.person.handleDateOfStudy}
      />
    </>
  );
}

function Education({
  school,
  handleSchool,
  study,
  handleStudy,
  dateOfStudy,
  handleDateOfStudy,
}) {
  return (
    <>
      <label>
        Educational institution:{""}
        <input type="text" value={school} onChange={handleSchool} />
      </label>
      <label>
        Study:{""}
        <input type="text" value={study} onChange={handleStudy} />
      </label>
      <label>
        End date:{""}
        <input type="date" value={dateOfStudy} onChange={handleDateOfStudy} />
      </label>
    </>
  );
}
