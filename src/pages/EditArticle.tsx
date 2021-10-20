import { useState } from "react";
import { Article } from "src/types/Article";

function EditArticle() {
  const [article, setArticle] = useState<Article>({
    slug: "",
    title: "",
    author: "",
    content: "",
    tags: "",
  });

  return (
    <div>
      <form>
        <input
          placeholder="slug"
          value={article.slug}
          onChange={(e) => setArticle({ ...article, slug: e.target.value })}
        />
        <input
          placeholder="title"
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
        />
        <input
          placeholder="author"
          value={article.author}
          onChange={(e) => setArticle({ ...article, author: e.target.value })}
        />
        <input
          placeholder="content"
          value={article.content}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
        />
        <input
          placeholder="tags"
          value={article.tags}
          onChange={(e) => setArticle({ ...article, tags: e.target.value })}
        />
        <button type="button">Save</button>
      </form>
    </div>
  );
}

export default EditArticle;
