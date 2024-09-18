import "../components/Product.css";

export default function Product({
  name = "Not found, try again",
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price = "???",
}) {
  return (
    <>
      <h2 className="title">{name}</h2>
      <img
        className="img"
        src={imgUrl}
        alt={name}
        width="480"
      />
      <div className="div">
        <p className="text">
          Price: {price} credits
        </p>
        <button className="btn">Buy</button>
      </div>
    </>
  );
}
