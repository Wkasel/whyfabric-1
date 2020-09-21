import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';

import Button from '@components/Button';
import ExternalLink from '@components/ExternalLink';
import styles from './styles.module.scss';

function Label({ label }) {
  return (
    <Typography variant="h6" className={styles.label}>
      {label}
    </Typography>
  );
}

function ProfileContent({ user, onClickFavorites }) {
  return (
    <Grid container className={styles.wrapper}>
      <Grid item xs={12} md={3}>
        <Avatar
          variant="square"
          src={user.photo || '/images/default-user.svg'}
          className={styles.photo}
        />
        <Typography variant="h5" className={styles.name}>
          {`${user.firstName} ${user.lastName}`}
        </Typography>
        <Typography variant="body1" className={styles.career}>
          {user.title}
        </Typography>
        <Typography variant="body2" className={styles.overview}>
          {user.biography}
        </Typography>
        <div className={clsx(styles.contact, styles.list)}>
          {user.website && <ExternalLink url={user.website} />}
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
        <Button
          link
          color="default"
          startIcon={<FavoriteIcon />}
          className={styles.favoritesButton}
          onClick={onClickFavorites}
        >
          View Favorites
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <Label label="Expertise" />
        <div className={styles.expertise}>{user.expertise}</div>
        <Label label="Awards" />
        <div className={styles.list}>
          {user.awards.map((v, i) => (
            <span key={i} className={styles.award}>
              {v}
            </span>
          ))}
        </div>
        <Label label="Published Works" />
        <div className={styles.list}>
          {user.works.map((v, i) => (
            <ExternalLink key={i} url={v} className={styles.workUrl} />
          ))}
        </div>
        <div className={styles.socials}>
          {user.socials.linkedin && (
            <ExternalLink url={user.socials.linkedin}>
              <img src="/images/linkedin.svg" width="32" height="32" />
            </ExternalLink>
          )}
        </div>
      </Grid>

      <Grid item xs={12} md={5}>
        <Label label="Theories" />
        <List disablePadding className={styles.theories}>
          {user.theoriesByOwner.items.map((item, i) => (
            <ListItem key={i} disableGutters divider>
              <Link href={`/theories/${item.id}`}>
                <ListItemText primary={item.name} />
              </Link>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Link href="/me/edit">
        <a className={styles.editButton}>Edit</a>
      </Link>
    </Grid>
  );
}

export default ProfileContent;
