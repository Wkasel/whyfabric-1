import ListItem from '@material-ui/core/ListItem';

const MenuLink = (props) => {
  return <ListItem button={true} component="a" {...props} />;
};

export default MenuLink;
