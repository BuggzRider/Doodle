import './SearchBar.scss';

const SearchBar = ({
    isSuggesstionsVisible,
    value,
    onChangeInputHandler,
    onFocusHandler,
}) => {
    return (
        <div className='searchBarInput'>
            <i class="material-icons">search</i>
            <input
                value={value}
                onChange={onChangeInputHandler}
                onFocus={onFocusHandler}
                className={`inputBar ${isSuggesstionsVisible ? 'borderBottom' : ''}`}
            />
        </div>
    );
}

export default SearchBar;
