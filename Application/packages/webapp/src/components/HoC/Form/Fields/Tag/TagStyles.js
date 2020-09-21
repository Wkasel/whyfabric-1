// import { Theme } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const tagStyles = makeStyles((theme) => {
  const spacing = theme.spacing();

  return {
    buttonRoot: {
      marginBottom: spacing,
      marginLeft: spacing,
      marginTop: spacing,
    },
    chipRoot: {
      marginBottom: spacing,
      marginLeft: spacing,
      marginTop: spacing,
    },
  };
});

export default tagStyles;
