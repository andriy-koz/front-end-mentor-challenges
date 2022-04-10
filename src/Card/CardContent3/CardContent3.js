import styles from './CardContent3.module.css';
import SmCard from './SmCard/SmCard';

const CardContent3 = props => {
  return (
    <div className={styles.cardContent3}>
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className={styles.p2}>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <SmCard
        id='2'
        title='Bamboo Stand'
        pledgeAmount='25'
        info="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        daysLeft='101'
        outOfStock={false}
        selected={props.selectedHandler}
      />
      <SmCard
        id='3'
        title='Black Edition Stand'
        pledgeAmount='75'
        info='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
        daysLeft='64'
        outOfStock={false}
        selected={props.selectedHandler}
      />
      <div className={styles.outOfStock}>
        <SmCard
          title='Mahogany Special Edition'
          pledgeAmount='200'
          info='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
          daysLeft='0'
          outOfStock={true}
        />
      </div>
    </div>
  );
};

export default CardContent3;
