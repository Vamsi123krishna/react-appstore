// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, updateTabItem, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickingtab = () => {
    updateTabItem(tabId)
  }

  const isActivatingTheTab = isActive ? 'active-btn' : ''

  return (
    <li className="tabs-container">
      <button
        type="button"
        onClick={onClickingtab}
        className={isActivatingTheTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
