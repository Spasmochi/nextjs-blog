function card(props) {
  return (
    <div className="px-4">
      {/* <!-- Be sure to use this with a layout container that is full-width on mobile --> */}
      <div className="bg-white overflow-hidden shadow sm:rounded-lg my-5 ">
        <div className="px-4 py-5 sm:p-6">{props.content}</div>
      </div>
    </div>
  );
}

export default card;
