import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import _merge from 'lodash/merge';

import { getMe } from 'src/data/amplify/api';
import Loader from 'src/components/Loader';
import Switch from 'src/components/Switch';
import Favorites from '../Favorites';
import ProfileForm from './Form';
import styles from './styles.module.scss';
import { userData, favoritesData } from '../mock';

function ProfileEdit({ user }) {
  const [me, setMe] = useState();
  const [isPublic, setPublic] = useState(false);

  useEffect(() => {
    const loadMe = async () => {
      const me = await getMe();
      setMe(_merge(me, userData));
    };
    loadMe();
  }, []);

  const onChangePublic = (e) => {
    setPublic(e.target.checked);
  };

  return (
    <Loader loading={!me}>
      <Grid container>
        <Grid item xs={12} md={6} className={styles.formWrapper}>
          <ProfileForm user={me} />
        </Grid>

        <Grid item xs={12} md={6} className={styles.favoritesWrapper}>
          <Favorites favorites={favoritesData} isEditMode />
          <Switch
            width={55}
            labelPlacement="top"
            label="Public"
            className={styles.switch}
            checked={isPublic}
            onChange={onChangePublic}
          />
        </Grid>
      </Grid>
    </Loader>
  );
}

export default ProfileEdit;
