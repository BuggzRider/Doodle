import './ButtonSet.scss';

const ButtonSet = ({
    value,
    handleSearch,
    isOpen,
}) => {

    return isOpen &&
        <div className='searchButtons_container'>
            <button className='btn'
                onClick={() => handleSearch(value)}>
                Google Search
            </button>
            <button className='btn'>
                I am feeling lucky
            </button>
        </div>
}

export default ButtonSet
