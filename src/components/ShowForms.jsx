function ShowForms(props) {
  return (
    <div className="toggle-forms-div">
      <button onClick={props.toggleForms}>Toggle forms</button>
    </div>
  );
}

export default ShowForms;
