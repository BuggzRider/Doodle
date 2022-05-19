import { useEffect, useState } from 'react';
import './Home.scss';
import dummyData from '../../common/commonData/dummyDataForSearch';
import SearchBarWithSuggesstions from '../../components/SearchBarWithSuggesstions/SearchBarWithSuggesstions';
import ButtonSet from '../../components/UI/ButtonSet/ButtonSet';

const Home = () => {

  const [inputValue, setInputValue] = useState('')
  const [isSuggesstionsVisible, setIsSuggesstionsVisible] = useState(false)
  const [searchOptions, setSearchOptions] = useState(dummyData)
  const [filteredOptions, setFilteredOptions] = useState(dummyData)

  useEffect(() => {
    const newOptions = searchOptions.filter(item => item.text.includes(inputValue))
    setFilteredOptions(newOptions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  useEffect(() => {
    setFilteredOptions(searchOptions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchOptions])


  const onChangeInputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const onSelectHandler = (item) => {
    setInputValue(item.text)
    handleSearch(item.text)
  }

  const onRemoveHandler = (itemToDelete) => {
    const newOptions = searchOptions.filter(item => item.text !== itemToDelete.text)
    setSearchOptions(newOptions)
  }

  const handleSearch = (value) => {
    console.log(value)
    setIsSuggesstionsVisible(false)
    if (filteredOptions.length === 0)
      setSearchOptions([{ text: value }, ...searchOptions])
  }

  return (
    <div className="home">
      <p className='page_heading'>Doodle</p>
      <SearchBarWithSuggesstions
        value={inputValue}
        onChangeInputHandler={onChangeInputHandler}
        onSelectHandler={onSelectHandler}
        options={filteredOptions}
        onRemoveHandler={onRemoveHandler}
        handleSearch={handleSearch}
        isSuggesstionsVisible={isSuggesstionsVisible}
        setIsSuggesstionsVisible={setIsSuggesstionsVisible}
      />
      <ButtonSet
        value={inputValue}
        handleSearch={handleSearch}
        isOpen={!isSuggesstionsVisible}
      />
    </div>
  );
}

export default Home;
