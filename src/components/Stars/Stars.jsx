const HalfStar = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
      fill="#FFD700"
    />
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
      fill="#FFF"
      style={{ clipPath: "inset(0 0 0 50%)" }}
    />
  </svg>
);

const FullStar = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
      fill="#FFD700"
    />
  </svg>
);

const EmptyStar = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24H14.81L12 2 9.19 9.24H2L7.46 13.97 5.82 21L12 17.27Z"
      fill="#FFF"
    />
  </svg>
);

const Stars = ({rating}) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index} className="text-yellow-500">
          {index < filledStars
            ? FullStar()
            : hasHalfStar && index === filledStars
            ? HalfStar()
            : EmptyStar()}
        </span>
      ))}
    </div>
  );
};

export default Stars;
