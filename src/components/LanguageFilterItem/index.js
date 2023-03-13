import './index.css'

const LanguageFilterItem = props => {
  const {eachTabDetails, updateActiveTabId, activeTabId} = props
  const {id, language} = eachTabDetails

  const onClickTabItem = () => {
    updateActiveTabId(id)
  }

  const tabStyleClassName = activeTabId === id ? 'active-tab' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-button ${tabStyleClassName}`}
        onClick={onClickTabItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
