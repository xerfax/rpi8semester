import { SortOffersType } from "../../const";
import { useState, KeyboardEvent } from "react";
import classNames from 'classnames';
import { SortOffer } from "../../types/sort";

type SortPlacesProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

function SortOptions({ activeSorting, onChange }: SortPlacesProps) {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    transform: `translateY(-50) ${isOpen ? "rotate(180deg" : ""}`,
  };

  function ketDownHandler(evt: KeyboardEvent) {
    if (evt.key === "Escape" && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  }

  function typeClickHandler() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function sortingItemClickHandler(type: SortOffer) {
    onChange(type);
    setIsOpen(false);
  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={ketDownHandler}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={typeClickHandler}
      >
        {activeSorting}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style={iconStyle}
        >
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames(
          { "places__options--opened": isOpen },
          "places__options",
          "places__options--custom"
        )}
      >
        {Object.values(SortOffersType).map((type) => (
          <li
            key={type}
            className={classNames(
              { "places__option--active": type === activeSorting },
              "places__option"
            )}
            tabIndex={0}
            onClick={() => sortingItemClickHandler(type as SortOffer)}
          >
            {type};
          </li>
        ))}
      </ul>
    </form>
  );
}
export { SortOptions };
