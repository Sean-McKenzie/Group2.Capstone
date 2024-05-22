import { useState } from "react";

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "grey";
const DEFAULT_COLOR = "green";

export default function Stars({
  count,
  defaultRating,
  icon,
  color,
  iconSize,
  setRating,
}) {
  const [rating, setLocalRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

  const handleClick = (rating) => {
    setLocalRating(rating);
    setRating(rating); // Update the parent component's rating state
    localStorage.setItem("starRating", rating);
  };

  return (
    <div className="starsContainer">
      {stars.map((item, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating || index < temporaryRating);

        let elementColor = "";

        if (isActiveColor) {
          elementColor = color || DEFAULT_COLOR;
        } else {
          elementColor = DEFAULT_UNSELECTED_COLOR;
        }

        return (
          <div
            className="star"
            key={index}
            style={{
              fontSize: iconSize ? `${iconSize}px` : "35px",
              color: elementColor,
              filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index + 1)}
          >
            {icon ? icon : DEFAULT_ICON}
          </div>
        );
      })}
    </div>
  );
}

// import { useState } from "react";
// // import Stars.css from " Stars.css";

// const DEFAULT_COUNT = 5;
// const DEFAULT_ICON = "★";
// const DEFAULT_UNSELECTED_COLOR = "grey";
// const DEFAULT_COLOR = "green";

// export default function Stars({ count, defaultRating, icon, color, iconSize }) {
//   const [rating, setRating] = useState(defaultRating);
//   const [temporaryRating, setTemporaryRating] = useState(0);

//   let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

//   const handleClick = (rating) => {
//     setRating(rating);
//     localStorage.setItem("starRating", rating);
//   };

//   return (
//     <div className="starsContainer">
//       {stars.map((item, index) => {
//         const isActiveColor =
//           (rating || temporaryRating) &&
//           (index < rating || index < temporaryRating);

//         let elementColor = "";

//         if (isActiveColor) {
//           elementColor = color || DEFAULT_COLOR;
//         } else {
//           elementColor = DEFAULT_UNSELECTED_COLOR;
//         }

//         return (
//           <div
//             className="star"
//             key={index}
//             style={{
//               fontSize: iconSize ? `${iconSize}px` : "35px",
//               color: elementColor,
//               filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
//             }}
//             onMouseEnter={() => setTemporaryRating(index + 1)}
//             onMouseLeave={() => setTemporaryRating(0)}
//             onClick={() => handleClick(index + 1)}
//           >
//             {icon ? icon : DEFAULT_ICON}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
