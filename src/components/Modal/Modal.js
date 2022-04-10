import styles from './Modal.module.css';

const Modal = props => {
  if (!props.isOpen) return null;
  return (
    <>
      <div className={styles['backdrop']} onClick={props.closeModal}></div>
      <div className={styles['modal']}>
        <p className={styles['modal-close']} onClick={props.closeModal}>
          X
        </p>
        <h2 className={styles['modal-title']}>
          Modal for practicing{' '}
          <span>
            Portals<span className={styles['and']}> &</span> Refs
          </span>
        </h2>
        <ul className={styles['modal-info']}>
          <li>
            <span>Name:</span> {props.name.length <= 0 ? 'No data' : props.name}
          </li>
          <li>
            <span>Last Name:</span>{' '}
            {props.lastName.length <= 0 ? 'No data' : props.lastName}
          </li>
          <li>
            <span>Email:</span>{' '}
            {props.email.length <= 0 ? 'No data' : props.email}
          </li>
          <li>
            <span>Password:</span>{' '}
            {props.pass.length <= 0 ? 'No data' : props.pass}
          </li>
        </ul>
        <button onClick={props.closeModal} className={styles['modal-button']}>
          Ok, cool!
        </button>
      </div>
    </>
  );
};

export default Modal;
