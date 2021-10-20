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

  const processTime = (time: string) => {
    if (!time) return "";
    const newTime = new Date(time);
    return newTime.toLocaleString();
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle(id);
      if (result)
        setArticle({
          ...result,
          tags: result.tags.join(),
          createdAt: processTime(result.createdAt),
          updatedAt: processTime(result.updatedAt),
        });
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <button onClick={() => history.push(`/edit-article/${id}`)}>Edit</button>
      <h1>{article.title}</h1>
      <table>
        <tbody>
          <tr>
            <th>Author</th>
            <td>{article.author}</td>
          </tr>
          <tr>
            <th>Created At</th>
            <td>{article.createdAt}</td>
          </tr>
          <tr>
            <th>Updated At</th>
            <td>{article.updatedAt}</td>
          </tr>
          <tr>
            <th>Tags</th>
            <td>{article.tags}</td>
          </tr>
        </tbody>
      </table>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
