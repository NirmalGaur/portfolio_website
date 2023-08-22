import './index.scss';

const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        //we will use span tag (inline) as we need to form a word from the individual letters:
        <span>
            {
                strArray.map((char, i)=> (
                    <span key={char +i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;