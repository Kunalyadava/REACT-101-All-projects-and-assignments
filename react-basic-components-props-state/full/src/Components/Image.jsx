// Write Code here
// Write Code here

const Image = ({ title, src, alt, height, width }) => {
    return (
      <>
        <h2>{title}</h2>
        <img src={src} alt={alt} width={width} height={height} />
      </>
    );
  };
  export default Image;
  