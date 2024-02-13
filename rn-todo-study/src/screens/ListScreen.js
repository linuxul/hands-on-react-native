import { Pressable, FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmptyList from "../components/EmptyList";
import List from "../components/List";
import InputFAB from "../components/InputFAB";
import { useState } from "react";
import { nanoid } from "nanoid";

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [todos, setTodos] = useState([
    { id: "1", task: "task", isDone: false },
    { id: "2", task: "task", isDone: false },
    { id: "3", task: "task", isDone: false },
    { id: "4", task: "task", isDone: false },
    { id: "5", task: "task", isDone: false },
    { id: "6", task: "task", isDone: false },
    { id: "7", task: "task", isDone: false },
    { id: "8", task: "task", isDone: false },
    { id: "9", task: "task", isDone: false },
    { id: "10", task: "task", isDone: false },
    { id: "11", task: "task", isDone: false },
    { id: "12", task: "task", isDone: false },
    { id: "13", task: "task", isDone: false },
    { id: "14", task: "task", isDone: false },
    { id: "15", task: "task", isDone: false },
    { id: "16", task: "task", isDone: false },
    { id: "17", task: "task", isDone: false },
    { id: "18", task: "task", isDone: false }
  ]);
  console.log("todos : " + todos);

  const [isBottom, setIsBottom] = useState(false);

  const onInsert = task => {
    const id = nanoid();
    setTodos(prev => [{ id, task, isDone: false }, ...prev]);
  };

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? (
        <List data={todos} setIsBottom={setIsBottom}></List>
      ) : (
        <EmptyList></EmptyList>
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom}></InputFAB>
    </View>
  );
};

export default ListScreen;
