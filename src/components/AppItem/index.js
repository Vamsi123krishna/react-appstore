// Write your code here
const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <div>
      <li>
        <img src={imageUrl} alt={appName} />
        <p>{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
