import React, { useState, useEffect } from "react";

import { IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import HtmlTooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { theoriesRequests } from "../../../utils/API";

import "./myTheories.css";
import { makeStyles } from "@material-ui/core/styles";
import CustomTooltip from "../../elements/interfaceElements/CustomTooltip";

const useStyles = makeStyles(theme => ({

    theories: {
        padding: '22px 10% 22px 22px',
        backgroundColor: '#fff',
        boxShadow: '0 0 3px 1px rgba(0, 0, 0, .2)',
        width: '810px',
        margin: 'auto',
        [theme.breakpoints.up('lg')]: {
            width:'60%',
        },
        [theme.breakpoints.down('md')]: {
            width:'70%',
        }
    },
    title: {
        fontSize: '1.4rem',
        fontWeight: '400',
        paddingBottom: '30px'

    },
    "& .MuiGrid-container": {
      "& .MuiGrid-item": {
        "& .MuiIconButton-root": {
          marginRight: "10px",
          "&:hover": {
            backgroundColor: "#fff"
          }
        },

        '& .MuiGrid-container':{
            '& .MuiGrid-item': {
                '& .MuiIconButton-root': {
                    '&:hover': {
                      backgroundColor: '#fff'
                    }
                },
                '& .MuiBadge-badge': {
                  backgroundColor: '#3748a7',
                    color: '#fff',
                    fontWeight: '300',
                    top: '-15px',
                    right: '-15px',
                    height: 'auto',
                    padding: '8px 6px',
                    borderRadius: '15px 15px 15px 0',
                    fontSize: '.7rem'
                },
                '&:nth-child(1)':{
                    flexBasis: '35%',
                },
                '&:nth-child(2)':{
                    flexBasis: '35%'
                },
            }
        }
    },
    theoryName: {
        fontSize: '1.2rem',
        fontWeight: '600'
    },
    icon: {
        color: '#8a8a8a',
        fontSize: '1.8rem',
        transition: 'color .25s',
        '&:hover':{
            color: '#29b6f6',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1.4rem',
        }
    },
    icons: {
        alignSelf: 'center'
        },
    publish: {
        color: '#29b6f6',
        fontSize: '0.8rem',
        '&>p': {
            marginBottom: '0'
        }
      }
    
  },
  theoryName: {
    fontSize: "1.2rem",
    fontWeight: "600"
  },
  icon: {
    color: "#8a8a8a",
    fontSize: "2.4rem",
    transition: "color .25s",
    "&:hover": {
      color: "#29b6f6"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8rem"
    }
  },
  publish: {
    color: "#29b6f6",
    fontSize: "0.8rem",
    "&>p": {
      marginBottom: "0"
    }
  },
  edit: {
    color: "#29b6f6",
    fontSize: ".8rem"
  },
  editWrap: {
    position: "relative"
  },
  altTheoryTitle: {
    fontSize: "1rem",
    paddingRight: "24px",
    fontWeight: "400"
  },
  altTheoryView: {
    fontSize: ".8rem",
    color: "#008b7d"
  },
  tooltip: {
    backgroundColor: "#fff"
  }
}));

const MyTheories = () => {
  const classes = useStyles();
  const [theories, getTheories] = useState([]);
  const [deleatingTheoryIndex, setIndex] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    theoriesRequests
      .getTheories()
      .then(data => {
        getTheories(data.data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {}, [theories]);

  const handleOpenDialog = index => {
    setIndex(index);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const deleteTheory = index => {
    theoriesRequests
      .deleteTheory(theories[index]._id)
      .then(data => {
        getTheories(data.data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }
return(
        <div className='my_theories_container'>
            <div className={classes.theories}>
                <h2 className={classes.title}>My Theories</h2>
                {theories && theories.map((item, index) => {
                    return (
                        <div key={index} className={classes.theory}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="baseline"
                            >
                                <Grid item>
                                    <h3 className={classes.theoryName}>{item.name}</h3>
                                </Grid>

                                <Grid item className={classes.icons}>
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="stretch">
                                        <IconButton>
                                            <Badge badgeContent={103} max={999}>
                                                <CommentIcon className={classes.icon}/>
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <Badge badgeContent={103} max={999}>
                                                <ShareIcon className={classes.icon}/>
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <Badge badgeContent={103} max={999}>
                                                <FavoriteIcon className={classes.icon}/>
                                            </Badge>
                                        </IconButton>
                                    </Grid>
                                </Grid>


                  <Grid item className={classes.publish}>
                    <p>Published</p>
                    <p className="publishDate">2019/9/6</p>
                  </Grid>

                  <Grid item className={classes.editWrap}>
                    <HtmlTooltip
                      className={classes.tooltip}
                      disableFocusListener
                      disableTouchListener
                      title={
                        <React.Fragment>
                          <CustomTooltip
                            title="Get more exposure"
                            text="Sync nodes within your theories to similar ones from other theories to get more traffic"
                          />
                        </React.Fragment>
                      }
                      placement="right-start"
                    >
                      <Button
                        className={classes.edit}
                        //
                        onClick={() => deleteTheory(index)}
                        //
                      >
                        {/* EDIT */}
                        DELETE
                      </Button>
                    </HtmlTooltip>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="baseline">
                  <h4 className={classes.altTheoryTitle}>Alternate Theory</h4>
                  <Button className={classes.altTheoryView}>VIEW</Button>
                </Grid>
              </div>
            );
          })}
      </div>
    </div>
  )
};
export default MyTheories;
