import React from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { XCircle } from 'react-feather';

import './modal.scss';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    outline: 'none',
    padding: theme.spacing(2, 4, 3),
    overflow: "auto",
  },
}));



const ModalRobot = ({ card }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [isOpen, setIsOpen] = React.useState(0);
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={() => { setIsOpen(false); }}
      >
        <div style={modalStyle} className={classes.paper}>
          modal content here
        </div>
      </Modal>
    </div>
  );
};

ModalRobot.propTypes = {
  card: PropTypes.array,
};

ModalRobot.defaultProps = {
  card: null,
};

export default ModalRobot;
