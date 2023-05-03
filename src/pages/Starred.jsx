import {useStarredShows} from '.././lib/useStarredShows'

const Starred = () =>{
     const [starredShows] = useStarredShows()

     return <div>starred page , starred {starredShows.length} shows</div>
}

export default Starred