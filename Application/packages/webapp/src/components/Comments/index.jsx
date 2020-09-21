import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
// @material-ui/core icons
import Person from '@material-ui/icons/Person';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Reply from '@material-ui/icons/Reply';
import Favorite from '@material-ui/icons/Favorite';
// core components
import GridContainer from '@sxs/comps/Grid/GridContainer.js';
import GridItem from '@sxs/comps/Grid/GridItem.js';
import Table from '@sxs/comps/Table/Table.js';
import Button from '@sxs/comps/CustomButtons/Button.js';
import Media from '@sxs/comps/Media/Media.js';
import CustomInput from '@sxs/comps/CustomInput/CustomInput.js';
import Paginations from '@sxs/comps/Pagination/Pagination.js';

import style from '@sxs/theme/jss/material-kit-pro-react/views/componentsSections/contentAreas.js';

import * as avatar from '../../SxS-Ui/theme/img/faces/avatar.jpg';
import kendall from '../../SxS-Ui/theme/img/faces/kendall.jpg';
import marc from '../../SxS-Ui/theme/img/faces/marc.jpg';
import placeholder from '../../SxS-Ui/theme/img/placeholder.jpg';
import product1 from '../../SxS-Ui/theme/img/product1.jpg';
import product2 from '../../SxS-Ui/theme/img/product2.jpg';
import product3 from '../../SxS-Ui/theme/img/product3.jpg';

const useStyles = makeStyles(style);

const Comments = () => {
  const classes = useStyles();
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
          <div>
            <h3 className={classes.title + ' ' + classes.textCenter}>
              10 Comments
            </h3>
            <Media
              avatar={avatar}
              title={
                <span>
                  TestTest <small>· 7 minutes ago</small>
                </span>
              }
              body={
                <span>
                  <p>Very Interesting Theory</p>
                  <p>Yes indeed</p>
                </span>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-tina"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.floatRight}
                    >
                      <Reply /> Reply
                    </Button>
                  </Tooltip>
                  <Button color="danger" simple className={classes.floatRight}>
                    <Favorite /> 243
                  </Button>
                </div>
              }
              innerMedias={[
                <Media
                  key={Math.random() * Date.now()}
                  avatar={kendall}
                  body={
                    <CustomInput
                      id="reply"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 4,
                        placeholder: ' Write some nice stuff or nothing...',
                      }}
                    />
                  }
                  footer={
                    <Button color="primary" className={classes.floatRight}>
                      <Reply /> Reply
                    </Button>
                  }
                />,
              ]}
            />
            <Media
              avatar={marc}
              title={
                <span>
                  John Camber <small>· Yesterday</small>
                </span>
              }
              body={
                <span>
                  <p>
                    Hello guys, nice to have you on the platform! There will be
                    a lot of great stuff coming soon. We will keep you posted
                    for the latest news.
                  </p>
                  <p>
                    Don{"'"}t forget, You{"'"}re Awesome!
                  </p>
                </span>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-john"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.floatRight}
                    >
                      <Reply /> Reply
                    </Button>
                  </Tooltip>

                  <Button link className={classes.floatRight}>
                    <Favorite /> 25
                  </Button>
                </div>
              }
              innerMedias={[
                <Media
                  key={Math.random() * Date.now()}
                  avatar={avatar}
                  title={
                    <span>
                      Tina Andrew <small>· 2 Days Ago</small>
                    </span>
                  }
                  body={
                    <span>
                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p>
                        Don{"'"}t forget, You{"'"}re Awesome!
                      </p>
                    </span>
                  }
                  footer={
                    <div>
                      <Tooltip
                        id="tooltip-tina2"
                        title="Reply to comment"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button
                          color="primary"
                          simple
                          className={classes.floatRight}
                        >
                          <Reply /> Reply
                        </Button>
                      </Tooltip>
                      <Button
                        simple
                        color="danger"
                        className={classes.floatRight}
                      >
                        <Favorite /> 243
                      </Button>
                    </div>
                  }
                />,
              ]}
            />
            <Media
              key={Math.random() * Date.now()}
              avatar={avatar}
              title={
                <span>
                  Rosa Thompson <small>· 2 Days Ago</small>
                </span>
              }
              body={
                <span>
                  <p>
                    Hello guys, nice to have you on the platform! There will be
                    a lot of great stuff coming soon. We will keep you posted
                    for the latest news.
                  </p>
                  <p>
                    Don{"'"}t forget, You{"'"}re Awesome!
                  </p>
                </span>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-tina2"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.floatRight}
                    >
                      <Reply /> Reply
                    </Button>
                  </Tooltip>
                  <Button simple color="danger" className={classes.floatRight}>
                    <Favorite /> 243
                  </Button>
                </div>
              }
            />
            <div>
              <Paginations
                className={
                  classes.textCenter + ' ' + classes.justifyContentCenter
                }
                pages={[
                  { text: '«' },
                  { text: 1 },
                  { text: 2 },
                  { active: true, text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: '»' },
                ]}
                color="primary"
              />
            </div>
          </div>
          <h3 className={classes.textCenter}>
            Post your comment <br />
            <small>- Logged In User -</small>
          </h3>
          <Media
            avatar={avatar}
            body={
              <CustomInput
                id="logged"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  multiline: true,
                  rows: 6,
                  placeholder: ' Write some nice stuff or nothing...',
                }}
              />
            }
            footer={
              <Button color="primary" className={classes.floatRight}>
                <Reply /> Reply
              </Button>
            }
          />
          <h3 className={classes.textCenter}>
            Post your comment <br />
            <small>- Not Logged In User -</small>
          </h3>
          <Media
            avatar={placeholder}
            body={
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      id="not-logged-name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Your Name',
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      id="not-logged-email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: 'Your Email',
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <CustomInput
                  id="not-logged-message"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 6,
                    placeholder: ' Write some nice stuff or nothing...',
                  }}
                />
              </div>
            }
            footer={
              <div className={classes.signInButton}>
                <h6>SIGN IN WITH</h6>
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon round color="google">
                  <i className="fab fa-google-plus-square" />
                </Button>
                <Button color="primary" className={classes.floatRight}>
                  Post comment
                </Button>
              </div>
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Comments;
