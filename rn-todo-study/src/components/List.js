import { Pressable, FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import { GRAY } from "../colors";
import PropTypes from "prop-types";

const Seperator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <ListItem item={item}></ListItem>}
      windowSize={2}
      ItemSeparatorComponent={Seperator}
      ListHeaderComponent={View}
      ListHeaderComponentStyle={{ height: 10 }}
    ></FlatList>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10
  }
});

export default List;
