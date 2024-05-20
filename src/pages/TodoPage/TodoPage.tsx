import ToDo from "../../components/ToDo/ToDo";
import { Provider } from "react-redux";
import store from "../../store/store";

const TodoPage = () => {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
};

export default TodoPage;
