import './Suggessions.scss';

const Suggessions = ({
    isOpen = false,
    onSelectHandler,
    onRemoveHandler,
    options,
}) => {
    return (
        <div className='suggesstions_container'>
            {isOpen &&
                options.map((item, index) =>
                    <div
                        key={item + index}
                        className='suggessionOption'
                        onClick={(e) => {
                            e.stopPropagation()
                            onSelectHandler(item)
                        }}>
                        <span className='suggessionOption_text'>
                            {item?.text}
                        </span>
                        <button
                            className='suggessionOption_button'
                            onClick={(e) => {
                                e.stopPropagation()
                                onRemoveHandler(item)
                            }}>
                            Remove
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default Suggessions;
