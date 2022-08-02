import { colors, utils } from "../utlis";
const StarDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((startId) => (
        <div key={startId} className="star" />
      ))}
    </>
  );
};
export default StarDisplay;
