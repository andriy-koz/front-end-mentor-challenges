import ModalCard from './ModalCard';
import styles from './Modal.module.css';
import SelectedModalAddOn from './SelectedModalAddOn';

const Modal = props => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClose}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div onClick={props.onClose} className={styles.iconCloseModal}></div>
          <h2>Back this project</h2>
        </div>
        <p className={styles.intro}>
          Want to support us in bringing Mastercraft Monitor Bamboo Riser out in
          the world?
        </p>
        <ModalCard
          title='Pledge with no reward'
          pledge=''
          daysLeft=''
          content='Choose to support us without a reward if you simply believe in our project.  As a backer, you will be signed up to receive product updates via email.'
          reward={false}
          stock={true}
          onClick={props.onSelect}
          id='1'
          selected={props.selected1}
        />
        {props.selected1 && (
          <SelectedModalAddOn onClickContinue={props.onClickContinue} id='1' />
        )}
        <ModalCard
          title='Bamboo Stand'
          pledge='25'
          daysLeft='101'
          content="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          reward={true}
          stock={true}
          onClick={props.onSelect}
          id='2'
          selected={props.selected2}
        />
        {props.selected2 && (
          <SelectedModalAddOn onClickContinue={props.onClickContinue} id='2' />
        )}
        <ModalCard
          title='Black Edition Stand'
          pledge='75'
          daysLeft='64'
          content={`You get a Black Special Edition computer stand and a personal thank you.   
          You’ll be added to our Backer member list. Shipping is included.`}
          reward={true}
          stock={true}
          onClick={props.onSelect}
          id='3'
          selected={props.selected3}
        />
        {props.selected3 && (
          <SelectedModalAddOn onClickContinue={props.onClickContinue} id='3' />
        )}
        <ModalCard
          title='Mahogany Special Edition'
          pledge='200'
          daysLeft='0'
          content='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
          reward={true}
          stock={false}
          onClick={null}
        />
      </div>
    </div>
  );
};

export default Modal;
