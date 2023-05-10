const styles = {
    borderRadius: "50%"
  };
  const Avatar = (props) => {
    const { image, caption } = props;
    return (
      <div>
        <img src={image} alt={caption} style={styles} data-test />
        <h2>{caption}</h2>
      </div>
    );
  };
  
  export default Avatar;