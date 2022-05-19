import { useRef, useEffect } from 'react';
import Suggessions from '../Suggessions/Suggessions';
import ButtonSet from '../UI/ButtonSet/ButtonSet';
import SearchBar from '../UI/SearchBar/SearchBar'
import './SearchBarWithSuggesstions.scss';

const SearchBarWithSuggesstions = ({
    value,
    onChangeInputHandler,
    onSelectHandler,
    onRemoveHandler,
    options,
    handleSearch,
    isSuggesstionsVisible,
    setIsSuggesstionsVisible
}) => {
    const searchContainerRef = useRef()

    useEffect(() => {
        const clickOutside = (e) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
                setIsSuggesstionsVisible(false)
            }
        }
        document.addEventListener('mousedown', clickOutside)
        return () => {
            document.removeEventListener("mousedown", clickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="searchBarWithSuggesstions_container"
            ref={searchContainerRef}>
            <SearchBar
                isSuggesstionsVisible={isSuggesstionsVisible}
                value={value}
                onChangeInputHandler={onChangeInputHandler}
                onFocusHandler={() => setIsSuggesstionsVisible(true)}
            />
            <Suggessions
                isOpen={isSuggesstionsVisible}
                options={options}
                onSelectHandler={onSelectHandler}
                onRemoveHandler={onRemoveHandler}
                value={value}
                handleSearch={handleSearch}
            />
            <ButtonSet
                value={value}
                handleSearch={handleSearch}
                isOpen={isSuggesstionsVisible}
            />
        </div>
    );
}

export default SearchBarWithSuggesstions;
