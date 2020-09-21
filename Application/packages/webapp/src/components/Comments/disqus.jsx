import React from 'react';
import Disqus from 'disqus-react';
import GridContainer from '@sxs/comps/Grid/GridContainer';
import GridItem from '@sxs/comps/Grid/GridItem';

const useStyles = makeStyles(
  createStyles({
    'article-container': {
      paddingTop: '50px',
      width: '60%',
      margin: 'auto',
    },
    'article-body': {
      padding: '25px 0px 50px 0px',
    },
  })
);

const DisqusComments = () => {
  const classes = useStyles();

  const disqusShortname = 'www-whyfabric-com';
  const disqusConfig = {
    url: 'http://localhost:5000',
    identifier: '123123',
    title: 'Brexit Theory',
  };

  return (
    <div id="comments">
      <div className={classes.title}>
        <h3>Comments</h3>
      </div>
      <GridContainer>
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={classes.mlAuto + ' ' + classes.mrAuto}
        >
          <Disqus.CommentCount
            shortname={disqusShortname}
            config={disqusConfig}
            className={classes.title + ' ' + classes.textCenter}
          >
            Comments
          </Disqus.CommentCount>
          <Disqus.CommentEmbed
            commentId={this.props.article.featuredComment}
            showMedia={true}
            height={160}
          />

          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default DisqusComments;
