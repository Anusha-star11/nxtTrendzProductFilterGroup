import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const renderRatingList = () => {
    const {ratingsList} = props

    return ratingsList.map(each => {
      const {changeRating, activeRatingId} = props
      const onClickRating = () => changeRating(each.ratingId)

      const IsActive = each.ratingId === activeRatingId
      const ratingClassName = IsActive ? `normal activeClassName` : `normal`

      return (
        <li key={each.activeRatingId} onClick={onClickRating}>
          <img src={each.imageUrl} alt={`each ${each.ratingId}`} />
          <p className={ratingClassName}>&up</p>
        </li>
      )
    })
  }

  const renderRatinginput = () => (
    <>
      <h1>Rating</h1>
      <ul>{renderRatingList()}</ul>
    </>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(each.categoryId)
      const IsActive = activeCategoryId === each.categoryId
      const ActiveClassName = IsActive ? `normal activeClassName` : `normal`

      return (
        <li key={each.categoryId} onClick={onClickCategory}>
          <p className={ActiveClassName}>{each.name}</p>
        </li>
      )
    })
  }

  const renderProductsCategoryinput = () => (
    <>
      <h1>Category</h1>
      <ul>{renderCategoryList()}</ul>
    </>
  )
  const onEnterSearchKeyButton = () => {
    const {onEnterSearchKey} = props
    onEnterSearchKey()
  }

  const onChangeSearchInput = event => {
    const {onChageSearch} = props
    onChangeSearch(event.target.value)
  }

  const renderSearchinput = () => {
    const {searchInput} = props
    return (
      <div>
        <input
          type="search"
          placeholder="search"
          onChange={onChangeSearchInput}
          onEnter={onEnterSearchKeyButton}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {onClickClearFiltersButton} = props

  return (
    <div className="filters-group-container">
      {renderSearchinput()}
      {renderProductsCategoryinput()}
      {renderRatinginput()}
      <button type="button" onClick={onClickClearFiltersButton}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
