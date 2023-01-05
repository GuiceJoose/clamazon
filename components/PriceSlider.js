function PriceSlider({
  minPrice,
  maxPrice,
  selectedMin,
  selectedMax,
  setFilters,
}) {
  return (
    <fieldset className="flex flex-col">
      <legend>Price Range</legend>
      <div classNames="flex">
        <input
          type="number"
          min={minPrice}
          max={maxPrice}
          value={selectedMin}
        ></input>
        <input
          type="number"
          min={minPrice}
          max={maxPrice}
          value={selectedMax}
        ></input>
      </div>
      <input
        type="range"
        step={1}
        min={minPrice}
        max={maxPrice}
        value={selectedMin}
      ></input>
      <input
        type="range"
        step={1}
        min={minPrice}
        max={maxPrice}
        value={selectedMax}
      ></input>
    </fieldset>
  );
}

export default PriceSlider;
