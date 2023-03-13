import {BsFillStarFill} from 'react-icons/bs'

import {GoRepoForked, GoIssueOpened} from 'react-icons/go'

import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    issuesCount,
    avatarUrl,
    name,
    forksCount,
    startsCount,
  } = repositoryDetails

  return (
    <li className="list-item-repository">
      <img src={avatarUrl} alt={name} className="image" />
      <p className="repo-name">{name}</p>
      <div className="repo-stats-container">
        <div className="stats">
          <BsFillStarFill className="icon star" />
          <p className="repo-details-para">{startsCount} stars</p>
        </div>
        <div className="stats">
          <GoRepoForked className="icon fork" />
          <p className="repo-details-para">{forksCount} count</p>
        </div>
        <div className="stats">
          <GoIssueOpened className="icon open-issues" />
          <p className="repo-details-para">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
