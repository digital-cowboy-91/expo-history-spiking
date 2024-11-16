import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { observer } from "@legendapp/state/react";
import { addTodo, todos$, toggleDone } from "../utils/SupaLegend";

const styles = StyleSheet.create({
  todos: {},
  input: {},
  todo: {},
  todoText: {},
  done: {},
});

// Emojis to decorate each todo.
const NOT_DONE_ICON = String.fromCodePoint(0x1f7e0);
const DONE_ICON = String.fromCodePoint(0x2705);

// The text input component to add a new todo.
export const NewTodo = () => {
  const [text, setText] = useState("");
  const handleSubmitEditing = ({ nativeEvent: { text } }) => {
    setText("");
    addTodo(text);
  };
  return (
    <TextInput
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={handleSubmitEditing}
      placeholder="What do you want to do today?"
      style={styles.input}
    />
  );
};

// A single todo component, either 'not done' or 'done': press to toggle.
export const Todo = ({ todo }: { todo: Tables<"todos"> }) => {
  const handlePress = () => {
    toggleDone(todo.id);
  };

  return (
    todo && (
      <TouchableOpacity
        key={todo.id}
        onPress={handlePress}
        style={[styles.todo, todo.done ? styles.done : null]}
      >
        <Text style={styles.todoText}>
          {todo.done ? DONE_ICON : NOT_DONE_ICON} {todo.text}
        </Text>
      </TouchableOpacity>
    )
  );
};

const Todos = observer(() => {
  // Get the todos from the state and subscribe to updates
  const todos = todos$?.get();

  const renderItem = ({ item: todo }) => <Todo todo={todo} />;
  if (todos)
    return (
      <FlatList
        data={Object.values(todos)}
        renderItem={renderItem}
        style={styles.todos}
      />
    );

  return <></>;
});

export default Todos;
