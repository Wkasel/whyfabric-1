import { useState } from 'react';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';

import TextField from '@components/TextField';
import Button from '@components/Button';
import styles from './styles.module.scss';

function Field({ label, className, onAdd, children }) {
  return (
    <div className={clsx(styles.field, className)}>
      {onAdd && (
        <IconButton
          color="secondary"
          className={styles.addButton}
          onClick={onAdd}
        >
          <AddCircleIcon />
        </IconButton>
      )}
      {label && <div className={styles.label}>{label}</div>}
      {children}
    </div>
  );
}

function List({ list, onRemove }) {
  return list.map((v, i) => (
    <div key={i} className={styles.listItem}>
      <CloseIcon className={styles.close} onClick={() => onRemove(i)} />
      <span>{v}</span>
    </div>
  ));
}

function Content({
  touched,
  errors,
  getFieldProps,
  values,
  setFieldValue,
  isSubmitting,
  handleSubmit,
}) {
  const [selectedAwardId, selectAward] = useState(-1);
  const [selectedWorkId, selectWork] = useState(-1);

  const handlePhoto = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      setFieldValue('photo', e.target.result);
      setFieldValue('photoFile', file);
    };
    reader.readAsDataURL(file);
  };

  const handleAddInterest = () => {};

  const handleAddAward = () => {};

  const handleAddWork = () => {};

  const handleOkModal = () => {
    if (selectedAwardId !== -1) {
      const awards = values.awards.slice();
      awards.splice(selectedAwardId, 1);
      setFieldValue('awards', awards);
      selectAward(-1);
    } else if (selectedWorkId !== -1) {
      const works = values.works.slice();
      works.splice(selectedWorkId, 1);
      setFieldValue('works', works);
      selectWork(-1);
    }
  };

  const handleCloseModal = () => {
    selectAward(-1);
    selectWork(-1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(styles.form, isSubmitting && styles.disabled)}
    >
      <Field>
        <div className={styles.avatar}>
          <Avatar src={values.photo} />
          <Button link component="label">
            Update Photo
            <input type="file" accept="image/*" hidden onChange={handlePhoto} />
          </Button>
        </div>
        <Typography variant="h5" className={styles.fullname}>
          {values.fullname}
        </Typography>
        <TextField
          {...getFieldProps('email')}
          type="email"
          placeholder="Email"
          helperText="Email"
          error={!!touched.email && errors.email}
        />
        <TextField
          {...getFieldProps('password')}
          type="password"
          placeholder="Password"
          helperText="Change Password"
          // error={!!touched.password && errors.password}
        />
        <Link href="/me">
          <a className={styles.viewButton}>View Profile</a>
        </Link>
      </Field>

      <Field label="Interests" onAdd={handleAddInterest}>
        <div className={styles.interests}>
          {values.interests.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      </Field>

      <Field>
        <Typography variant="h5">SME Details</Typography>
      </Field>

      <Field>
        <TextField
          {...getFieldProps('title')}
          placeholder="Title"
          helperText="Title"
          error={!!touched.title && errors.title}
        />
        <TextField
          {...getFieldProps('institution')}
          placeholder="Institution"
          helperText="Institution"
          error={!!touched.institution && errors.institution}
        />
        <TextField
          {...getFieldProps('biography')}
          multiline
          placeholder="Biography"
          helperText="Biography"
          error={!!touched.biography && errors.biography}
        />
        <TextField
          {...getFieldProps('website')}
          placeholder="Website URL"
          helperText="Website URL"
          error={!!touched.website && errors.website}
        />
      </Field>

      <Field label="Experties">
        <TextField
          {...getFieldProps('expertise')}
          placeholder="Type Expertise"
          helperText="Type Expertise"
          error={!!touched.expertise && errors.expertise}
        />
      </Field>

      <Field label="Awards" className={styles.awards} onAdd={handleAddAward}>
        <List list={values.awards} onRemove={selectAward} />
      </Field>

      <Field
        label="Published Works"
        className={styles.works}
        onAdd={handleAddWork}
      >
        <List list={values.works} onRemove={selectWork} />
      </Field>

      <Field className={styles.actions}>
        <Button type="submit" width={115} loading={isSubmitting}>
          Save
        </Button>
      </Field>

      <Dialog
        open={selectedAwardId !== -1 || selectedWorkId !== -1}
        onClose={handleCloseModal}
      >
        <DialogTitle>Are you sure you want to remove this</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedAwardId !== -1 && values.awards[selectedAwardId]}
            {selectedWorkId !== -1 && values.works[selectedWorkId]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button link enablePadding onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button link enablePadding autoFocus onClick={handleOkModal}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default Content;
