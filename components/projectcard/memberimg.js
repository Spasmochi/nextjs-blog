function memberimg(props) {
  return (
    <div>
      <img
        className={
          "max-w-none h-6 w-6 rounded-full text-white shadow-solid" +
          (props.img === undefined ? " hidden" : "")
        }
        src={props.img}
        alt={props.alt}
      />
    </div>
  );
}

export default memberimg;
