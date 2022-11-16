import './author.css'

export function Author(){
    return (
        <div className="author">
            <img src="/public/images/image-jeremy.png" alt='profile picture'/>
            <div className="infos">
                <div class="owner">Report for</div>
                <h1 className="name">Jeremy Robson</h1>
            </div>
        </div>
    );
}