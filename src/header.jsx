import { Author } from './author';
import './header.css'
import Options from './options';

export default function Header(){
    return(
        <header className='header'>
            <Author />
            <Options />
        </header>
    );
}