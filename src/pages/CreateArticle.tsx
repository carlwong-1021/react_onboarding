import { useState } from "react";
import { Article } from "src/types/Article";
import { createArticle } from "src/data/article";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreateArticle() {
  const [article, setArticle] = useState<Article>({
    slug: "",
    title: "",
    author: "",
    content: "",
    tags: "",
  });

  const validArticle = () => {
    if (
      !(typeof article.slug === "string") ||
      !(typeof article.title === "string") ||
      !(typeof article.author === "string") ||
      !(typeof article.content === "string")
    )
      return false;
    if (!article.slug || !article.title || !article.author) return false;
    return true;
  };

  const handleSubmit = async () => {
    if (!validArticle()) {
      alert("Invalid data!");
      return;
    }
    const data = { ...article, tags: article.tags.split(",") };
    const result = await createArticle(data);
    if (result) alert("article created successfully!");
  };

  return (
    <div>
      <TextField
        onChange={(e) => setArticle({ ...article, slug: e.target.value })}
        label="slug"
        defaultValue={article.slug}
        variant="standard"
        fullWidth
      />
      <TextField
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
        label="title"
        defaultValue={article.title}
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        onChange={(e) => setArticle({ ...article, author: e.target.value })}
        label="author"
        defaultValue={article.author}
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        onChange={(e) => setArticle({ ...article, content: e.target.value })}
        label="content"
        defaultValue={article.content}
        variant="standard"
        fullWidth
        sx={{ mt: 2 }}
      />
      <TextField
        onChange={(e) => setArticle({ ...article, tags: e.target.value })}
        label="tags"
        defaultValue={article.tags}
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
        Submit
      </Button>
    </div>
  );
}

export default CreateArticle;
