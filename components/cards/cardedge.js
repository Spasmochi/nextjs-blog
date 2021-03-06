function cardedge(props) {
  return (
    <div>
      {/* <!-- Be sure to use this with a layout container that is full-width on mobile --> */}
      <div className="bg-white overflow-hidden shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">{props.content}</div>
      </div>
    </div>
  );
}

export default cardedge;
