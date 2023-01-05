import PriceSlider from "./PriceSlider";

function Sidebar({ products, filters, setFilters }) {
  const categories = [...new Set(products.map((x) => x.category))];
  const colors = [...new Set(products.map((x) => x.colors).flat())];
  const minPrice = Math.floor(Math.min(...products.map((x) => x.price)));
  const maxPrice = Math.ceil(Math.max(...products.map((x) => x.price)));
  const { selectedMin, selectedMax } = filters;

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, e.target.value],
      });
    }
    if (!e.target.checked) {
      setFilters({
        ...filters,
        categories: [
          ...filters.categories.filter(
            (category) => category !== e.target.value
          ),
        ],
      });
    }
  };

  const handleColorChange = (e) => {
    if (e.target.checked) {
      setFilters({
        ...filters,
        colors: [...filters.colors, e.target.value],
      });
    }
    if (!e.target.checked) {
      setFilters({
        ...filters,
        colors: [...filters.colors.filter((color) => color !== e.target.value)],
      });
    }
  };

  const handleReset = () => {
    setFilters({
      categories: [],
      colors: [],
      selectedMin: minPrice,
      selectedMax: maxPrice,
    });
  };

  return (
    <aside>
      <fieldset>
        <legend>Category</legend>
        {categories.map((category) => {
          return (
            <div>
              <input
                checked={filters.categories.includes(category)}
                onChange={handleCategoryChange}
                type="checkbox"
                id={category}
                value={category}
              ></input>
              <label for={category}>{category}</label>
            </div>
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Color</legend>
        {colors.map((color) => {
          return (
            <div>
              <input
                type="checkbox"
                id={color}
                value={color}
                checked={filters.colors.includes(color)}
                onChange={(e) => handleColorChange(e)}
              ></input>
              <label for={color}>{color}</label>
            </div>
          );
        })}
      </fieldset>
      <PriceSlider
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedMin={selectedMin}
        selectedMax={selectedMax}
        setFilters={setFilters}
      />
      <button onClick={handleReset} type="button">
        Reset Filters
      </button>
    </aside>
  );
}

export default Sidebar;
