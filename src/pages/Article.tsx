import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getArticle } from "src/data/article";
import * as ArticleType from "src/types/Article";

function Article() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleType.Article>({
    slug: "",
    title: "",
    author: "",
    content: "",
    tags: "",
    createdAt: "",
    updatedAt: "",
  });
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle(id);
      if (result) setArticle(result);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <button onClick={() => history.push(`/edit-article/${id}`)}>Edit</button>
      <h1>{article.title}</h1>
      {/* Your task: show date element, createdAt >= updatedAt ? createdAt : updatedAt */}
      {/* Your task: add author element */}
      {/* Your task: list tags element */}
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
