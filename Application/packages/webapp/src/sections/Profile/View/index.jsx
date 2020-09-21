import { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import _merge from 'lodash/merge';

import { getMe } from 'src/data/amplify/api';
import Loader from 'src/components/Loader';
import Favorites from '../Favorites';
import PrfileView from './Content';
import styles from './styles.module.scss';
import { userData, favoritesData } from '../mock';

function ProfileView() {
  const [me, setMe] = useState();
  const [isOpenFavorites, openFavorites] = useState(false);

  useEffect(() => {
    const loadMe = async () => {
      const me = await getMe();
      setMe(_merge(me, userData));
    };
    loadMe();
  }, []);

  return (
    <Loader loading={!me}>
      <div className={styles.wrapper}>
        <PrfileView user={me} onClickFavorites={() => openFavorites(true)} />
      </div>
      <div className={clsx(styles.drawer, isOpenFavorites && styles.isOpen)}>
        <Favorites favorites={favoritesData} />
        <CloseIcon
          className={styles.closeIcon}
          onClick={() => openFavorites(false)}
        />
      </div>
    </Loader>
  );
}

export default ProfileView;
