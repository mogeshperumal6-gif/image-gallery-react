import ImageCard from "./ImageCard";

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          url={image.url}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
  );
}

export default Gallery;