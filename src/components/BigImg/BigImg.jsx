import './BigImg.scss';

export const BigImg = ({ src, setBigImg }) => {
  return (
    <div className="big-img">
      <div className="big-img__container">
      <button
        className="big-img__close"
        onClick={() => setBigImg()}
      >
      </button>

      <img
        className="big-img__img"
        src={src}
        alt="img"
      />
      </div>
    </div>
  );
}