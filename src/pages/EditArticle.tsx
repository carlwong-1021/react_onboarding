import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, updateArticle } from "src/data/article";
import { Article } from "src/types/Article";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

  const validArticle = () => {
    if (
      !(typeof article.title === "string") ||
      !(typeof article.author === "string") ||
      !(typeof article.content === "string")
    )
      return false;
    if (!article.title || !article.author) return false;
    return true;
  };

  const handleSubmit = async () => {
    if (!validArticle()) {
      alert("invalid data!");
      return;
    }
    const data = {
      slug: article.slug,
      title: article.title,
      author: article.author,
      content: article.content,
      tags: article.tags.split(","),
    };
    const result = await updateArticle(id, data);
    if (result) alert("article updated successfully!");
  };

  return (
    <div>
      <TextField
        label="slug"
        value={article.slug || ""}
        variant="standard"
        fullWidth
        disabled
      />
      <TextField
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
        label="title"
        value={article.title || ""}
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        onChange={(e) => setArticle({ ...article, author: e.target.value })}
        label="author"
        value={article.author || ""}
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        onChange={(e) => setArticle({ ...article, content: e.target.value })}
        label="content"
        value={article.content || ""}
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        onChange={(e) => setArticle({ ...article, tags: e.target.value })}
        label="tags"
        value={article.tags || ""}
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
      />
      <Button
        fullWidth
        variant="contained"
        type="button"
        onClick={() => handleSubmit()}
        sx={{ mt: 2 }}
      >
        Save
      </Button>
    </div>
  );
}

export default EditArticle;
