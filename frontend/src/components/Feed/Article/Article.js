import { Box, Grid, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import ArticleActivity from "./ArticleActivity";
import ArticleContent from "./ArticleContent";
import ArticleInfo from "./ArticleInfo";

import userImage from "assets/images/userImage.png";

function Article(props) {
  const userImg = props.articleData.userImg;
  const userName = props.articleData.userName;
  const category = props.articleData.category;
  const time = props.articleData.time;

  return (
    <Box className="article">
      <Grid className="article__inner" container direction="row">
        <Grid className="article__inner__userimg">
          <img src={userImage} />
        </Grid>
        <Grid className="article__inner__left">
          <ArticleInfo userName={userName} category={category} time={time} />
          <ArticleContent />
          <ArticleActivity />
        </Grid>
        <Grid className="article__inner__right">
          <Grid>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Article;