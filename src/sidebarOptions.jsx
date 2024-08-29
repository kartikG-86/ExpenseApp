import { CiWallet } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
const sections = [{
    title: 'Home',
    link: '/home',
    icon: <GoHome style={{ fontSize: '1.3rem' }} />
}, {
    title: 'Statistics',
    link: '/statistics',
    icon: <BsGraphUpArrow style={{ fontSize: '1.3rem' }} />

}, {
    title: 'Wallet',
    link: '/wallet',
    icon: <CiWallet style={{ fontSize: '1.3rem' }} />
}, {
    title: 'Profile',
    link: '/profile',
    icon: <FaRegUserCircle style={{ fontSize: '1.3rem' }} />

},]

export { sections }