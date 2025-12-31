function IdentityForm(props) {
  return (
    <>
      <form className="identity-form">
        <div className="form-field-vertical">
          <label htmlFor="name">Full name: </label>
          <input
            type="text"
            id="name"
            placeholder="Achille Claude Debussy"
            name="name"
            value={props.identity.name}
            onChange={props.onChange}
          />
        </div>
        <div className="form-field-vertical">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="claude@debussy.com"
            name="email"
            value={props.identity.email}
            onChange={props.onChange}
          />
        </div>
        <div className="form-field-vertical">
          <label htmlFor="phone">Phone: </label>
          <input
            type="tel"
            id="phone"
            placeholder="323-122-4567"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={props.identity.phone}
            onChange={props.onChange}
          />
        </div>
      </form>
    </>
  );
}

export default IdentityForm;
