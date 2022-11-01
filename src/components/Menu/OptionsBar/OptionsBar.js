import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const OptionsBar = ({
  categories, products, setSelectedCategory, setSearchQuery,
}) => {
  const handleOnSearch = (string) => {
    setSearchQuery(string);
  };

  const handleOnSelect = (item) => {
    setSearchQuery(item.name);
  };

  const handleOnClear = () => {
    setSearchQuery('');
  };

  const formatResult = (item) => {
    return (
      <div className='result-wrapper'>
        <span className='result-span d-block text-aling-left'>{item.name}</span>
      </div>
    );
  };

  return (
    <div className='d-flex row justify-content-between align-items-center'>
      <div className='col-10 col-md-8 col-lg-4 btn-group shadow-sm my-2' role='group'>
        <button className='btn btn-sm btn-outline-dark' type='button' onClick={() => setSelectedCategory(null)}>Todo</button>
        {categories?.data?.categories?.map(category => {
          return (
            <button key={category?.id} className='btn btn-sm btn-outline-dark rounded-0' type='button'
              onClick={() => setSelectedCategory(category)}>{category?.name}</button>
          );
        })}
      </div>
      <div className='col-12 col-md-8 col-lg-4 my-2'>
        <ReactSearchAutocomplete
          className='form-control'
          placeholder='Ingrese un producto'
          items={products?.data?.products}
          onSearch={handleOnSearch}
          onClear={handleOnClear}
          onSelect={handleOnSelect}
          formatResult={formatResult}
          styling={{
            height: '34px',
            border: '1px solid',
            borderRadius: '4px',
            backgroundColor: 'white',
            boxShadow: 'none',
            fontSize: '12px',
            fontFamily: 'Courier',
            clearIconMargin: '3px 8px 0 0',
            zIndex: 2,
          }}
          fuseOptions={{
            minMatchCharLength: 2,
            threshold: 0.1,
          }}
        />
      </div>
      <div className='col-12 col-md-1'>
        <button className='btn btn-dark shadow float-end'><i className='bi bi-sort-alpha-down' /></button>
      </div>
    </div>
  );
};

export default OptionsBar;
