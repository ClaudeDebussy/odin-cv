function IdentityForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name">Full name: </label>
        <input
          type="text"
          id="name"
          placeholder="Achille Claude Debussy"
          name="name"
          value={props.identity.name}
          onChange={props.onChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="claude@debussy.com"
          name="email"
          value={props.identity.email}
          onChange={props.onChange}
        />
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          placeholder="+1 323-122-4567"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={props.identity.phone}
          onChange={props.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default IdentityForm;
