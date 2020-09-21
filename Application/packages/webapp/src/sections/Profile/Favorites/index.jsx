import { useState } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';

import Button from '@components/Button';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles.module.scss';

function Label({ label }) {
  return (
    <div className={styles.label}>
      <FavoriteIcon />
      {label}
    </div>
  );
}

function Favorites({ favorites, isEditMode }) {
  const [selectedTheory, selectTheory] = useState();

  const handleCloseModal = () => {
    selectTheory();
  };

  return (
    <div className={styles.wrapper}>
      <Label label="Topics" />
      <List disablePadding className={styles.topics}>
        {favorites.topics.map((item, i) => (
          <ListItem key={i} disableGutters>
            <span>{item.title}</span>
            <span>{item.category}</span>
          </ListItem>
        ))}
      </List>

      <Label label="SME’s" />
      <List disablePadding className={clsx(styles.smes, 'custom-scrollbar')}>
        {favorites.smes.map((item, i) => (
          <ListItem key={i} disableGutters>
            <ListItemAvatar>
              <Avatar src={item.photo} />
            </ListItemAvatar>
            <ListItemText>
              {item.name}
              <span>{`${item.theories} Theories`}</span>
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Label label="Theories" />
      <List
        disablePadding
        className={clsx(styles.theories, isEditMode && styles.isEditMode)}
      >
        {favorites.theories.map((item, i) => (
          <ListItem key={i} disableGutters divider alignItems="flex-start">
            <ListItemText
              primary={
                <Link href={`/theories/${item.id}`}>
                  <span>{item.title}</span>
                </Link>
              }
              secondary={`By: ${item.name}`}
            />
            {isEditMode && (
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => selectTheory(item)}>
                  <ShareIcon />
                </IconButton>
                <IconButton edge="end">
                  <FavoriteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>

      <Dialog open={!!selectedTheory} onClose={handleCloseModal}>
        <DialogTitle>share-this</DialogTitle>
        <DialogActions>
          <Button link enablePadding onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button link enablePadding autoFocus onClick={handleCloseModal}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Favorites;
