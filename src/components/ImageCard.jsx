function ImageCard({ url, title, description }) {
  return (
    <div className="image-card">
      <img src={url} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;