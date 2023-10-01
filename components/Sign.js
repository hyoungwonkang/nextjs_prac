function Sign({ description, id, name }) {
  return (
    <div
      className="max-w-7xl rounded-md border-2 border
        purple-800 shadow-xl bg-purple-50 p-7 mb-10"
    >
      <p className="text-gray-700">{description}</p>
      <hr className="mt-3 mb-3 border-t-0 border-b-2 border-purple-800" />
      <div>
        <div className="text-purple-900">
          Written by <b>{name}</b>
          {id && <span> from {id}</span>}
        </div>
      </div>
    </div>
  );
}

export default Sign;
