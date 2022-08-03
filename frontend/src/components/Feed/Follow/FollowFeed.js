import { Grid } from "@mui/material";
import { getSavedBoard } from "api/board";
import { useEffect } from "react";
import "styles/Feed/FollowFeed.scss";

function FollowFeed() {
  useEffect(() => {
    const userId = "1";
    getSavedBoard(userId, (res) => console.log(res.data));
  })

  return (
    <Grid className="content">
      <Grid className="content__title">
        <h2>팔로우 피드</h2>
      </Grid>
      <Grid className="content__inner">inner 입니다.</Grid>
    </Grid>
  );
}

export default FollowFeed;
