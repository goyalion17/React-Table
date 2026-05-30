export default function DetailRowView({ person }) {
  const { name, username, email, phone, website, address, company } = person;
  const fullAddress = address ? `${address.street}, ${address.suite}` : '';

  return (
    <section className="card mt-4">
      <div className="card-body">
        <h2 className="card-title h5">
          Selected user: <strong>{name}</strong>{' '}
          <span className="text-muted">{`(@${username})`}</span>
        </h2>
        <dl className="row mb-0">
          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{email}</dd>

          <dt className="col-sm-3">Phone</dt>
          <dd className="col-sm-9">{phone}</dd>

          {website && (
            <>
              <dt className="col-sm-3">Website</dt>
              <dd className="col-sm-9">{website}</dd>
            </>
          )}

          {address && (
            <>
              <dt className="col-sm-3">Address</dt>
              <dd className="col-sm-9">{fullAddress}</dd>

              <dt className="col-sm-3">City</dt>
              <dd className="col-sm-9">{address.city}</dd>

              <dt className="col-sm-3">Zip</dt>
              <dd className="col-sm-9">{address.zipcode}</dd>
            </>
          )}

          {company && (
            <>
              <dt className="col-sm-3">Company</dt>
              <dd className="col-sm-9">{company.name}</dd>
            </>
          )}
        </dl>
      </div>
    </section>
  );
}
