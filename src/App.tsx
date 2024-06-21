import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./Posts";
import AddPost from "./AddPost";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AddPost />
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
