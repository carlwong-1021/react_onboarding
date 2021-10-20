import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getArticle } from "src/data/article";
import * as ArticleType from "src/types/Article";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
      <Typography variant="h3">{article.title}</Typography>
      <Grid container spacing={2} sx={{ my: 4 }}>
        <Grid item xs={6}>
          Author
        </Grid>
        <Grid item xs={6}>
          {article.author}
        </Grid>
        <Grid item xs={6}>
          Created At
        </Grid>
        <Grid item xs={6}>
          {article.createdAt}
        </Grid>
        <Grid item xs={6}>
          Updated At
        </Grid>
        <Grid item xs={6}>
          {article.updatedAt}
        </Grid>
        <Grid item xs={6}>
          Tags
        </Grid>
        <Grid item xs={6}>
          {article.tags}
        </Grid>
      </Grid>

      <p>{article.content}</p>

      <Button
        variant="contained"
        onClick={() => history.push(`/edit-article/${id}`)}
        fullWidth
        sx={{ mt: 2 }}
      >
        Edit
      </Button>
    </div>
  );
}

export default Article;
