import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }:CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1683009427470-a36fee396389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=45" 
        alt= "" 
        />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Henry Andrade</strong>
              <time
                title="19 de Setembro às 08:20"
                dateTime="2023-09-19 08:20:33"
              >
                Cerca de uma 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
