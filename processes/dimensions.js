import map from '../signals/processes/map'

export default
  map((ev) => [ev.target.innerWidth, ev.target.innerHeight])
