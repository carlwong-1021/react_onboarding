import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, updateArticle } from "src/data/article";
import { Article } from "src/types/Article";

function EditArticle() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article>({
    slug: "",
    title: "",
    author: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle(id);
      if (result)
        setArticle({
          ...result,
          tags: result.tags.join(),
        });
    };
    fetchData();
  }, [id]);

  const processTags = (tags: string) => {
    return tags.split(",");
  };

  const handleSubmit = async () => {
    const data = {
      slug: article.slug,
      title: article.title,
      author: article.author,
      content: article.content,
      tags: processTags(article.tags),
    };
    const result = await updateArticle(id, data);
    if (result) alert("article updated successfully!");
  };

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
        <button type="button" onClick={() => handleSubmit()}>
          Save
        </button>
      </form>
    </div>
  );
}

export default EditArticle;
