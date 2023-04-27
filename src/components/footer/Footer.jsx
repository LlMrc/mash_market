
import css from './Footer.module.css'
import logo from '../../assets/logo.png'
import {
    // InboxIcon,
    // PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon

} from '@heroicons/react/outline'



const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <span>Amazon</span>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue Orlando, FL 32001</span>
                    </span>
                </div>
            </div>


            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        <span>Sign in</span>
                    </span>
                </div>
</div>
                <div className={css.block}>
                <div className={css.details}>
                    <span>Ressource</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        <span>Security, privacy $ terms</span>
                    </span>
                </div>
            </div>

          
         


            <div className={css.block}>
                <div className={css.details}>
                    <span>Campaingn</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href="/about"></a>
                        <p>About us</p>
                    </span>
                </div>
            </div>

            <div className={css.copyRight}>
<span>Copy right 2023 by Mashpa</span>
<span>All right reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer