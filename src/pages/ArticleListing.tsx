import { useEffect, useState } from "react";
import { Article } from "src/types/Article";
import { listArticles } from "src/data/article";
import { useHistory } from "react-router-dom";

function ArticleListing() {
  const history = useHistory();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await listArticles();
      if (result) setArticles(result.items);
    };
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => history.push("/create-article")}>
        Create new article
      </button>
      <ul>
        {articles.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleListing;
