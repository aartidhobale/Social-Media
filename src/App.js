import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList"; // Import the PostList component
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab == "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          {/* Include the PostList component */}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
