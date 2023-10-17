import { Header } from "./Components/Header.jsx";
import { PostType, Post } from "./Components/Post.jsx";
import { SideBar } from "./Components/SideBar.jsx";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1678453147437-260a41db02dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      name: "Henry Andrade",
      role: "Desenvolvedor Full Stack",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptatibus eaque cum impedit quasi pariatur cupiditate aliquid non delectus unde repellat,",
      },
      {
        type: "paragraph",
        content: "nemo aliquam culpa vel id atque blanditiis corporis numquam.",
      },
      { type: "link", content: "Link" },
      { type: "link", content: "#algumaCoisa" },
    ],
    publishedAt: new Date("2023-09-25 09:29:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1683009427470-a36fee396389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=45",
      name: "Outra Pessoa",
      role: "Desenvolvedor Frontend",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptatibus eaque cum impedit quasi pariatur cupiditate aliquid non delectus unde repellat,",
      },
      {
        type: "paragraph",
        content: "nemo aliquam culpa vel id atque blanditiis corporis numquam.",
      },
      { type: "link", content: "Link" },
      { type: "link", content: "#algumaCoisa" },
    ],
    publishedAt: new Date("2023-09-24 09:29:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
