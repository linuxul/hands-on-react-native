import { Text, Pressable } from "react-native";
import PropTypes from "prop-types";

const Button = ({ title }) => {
  console.log(title);

  //   return <Text>{title}</Text>;
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: "red", padding: 20 },
        pressed && { backgroundColor: "blue" }
      ]}
      onPressIn={() => console.log("onPressIn")}
      onPressOut={() => console.log("onPressOut")}
      onPress={() => console.log("onPress")}
      onLongPress={() => console.log("onLongPress")}
      delayLongPress={2000}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: "button title"
};

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;

// import { Text, TouchableHighlight } from "react-native";
// import PropTypes from "prop-types";

// const Button = ({ title }) => {
//   console.log(title);

//   //   return <Text>{title}</Text>;
//   return (
//     <TouchableHighlight
//       style={{ backgroundColor: "red", padding: 20 }}
//       underlayColor="orange"
//       onPress={() => {}}
//     >
//       <Text style={{ color: "white" }}>{title}</Text>
//     </TouchableHighlight>
//   );
// };

// Button.defaultProps = {
//   title: "button title"
// };

// Button.propTypes = {
//   title: PropTypes.string.isRequired
// };

// export default Button;

// import { Text, TouchableOpacity } from "react-native";
// import PropTypes from "prop-types";

// const Button = ({ title }) => {
//   console.log(title);

// //   return <Text>{title}</Text>;
//     return (
//         <TouchableOpacity style={{ backgroundColor: 'red', padding: 20 }}>
//             <Text style={{ color: 'white'}}>{title}</Text>
//         </TouchableOpacity>
//     );
// };

// Button.defaultProps = {
//   title: "button title"
// };

// Button.propTypes = {
//   title: PropTypes.string.isRequired
// };

// export default Button;
