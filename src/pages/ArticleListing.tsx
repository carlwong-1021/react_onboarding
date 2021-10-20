import { useEffect, useState } from "react";
import { Article } from "src/types/Article";
import { listArticles } from "src/data/article";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
      <Button
        variant="contained"
        onClick={() => history.push("/create-article")}
        sx={{ mb: 2 }}
      >
        Create new article
      </Button>
      <List>
        {articles.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => history.push(`/article/${item.id}`)}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ArticleListing;
