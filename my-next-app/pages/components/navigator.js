import styles from './../../styles/Home.module.css';
import Link from 'next/link';


const Navigator=()=>{
return  (
    <div>
          <table>
         <tbody>
           <tr>
             <td>
                 <Link href="/">
                   <a>Index</a>
                 </Link>
             </td>
             <td>
                 <Link href="/components/home">
                   <a>Home</a>
                 </Link>
             </td>
             <td>
                 <Link href="/components/about">
                   <a>About</a>
                 </Link>
             </td>
             <td>
                 <Link href="/components/contact">
                   <a>Contact</a>
                 </Link>
             </td>
           </tr>
         </tbody>
       </table>
    </div>
);
};

export default Navigator;